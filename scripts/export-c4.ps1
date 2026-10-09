param(
    [Parameter(Mandatory = $true)][string]$WarPath,
    [string]$PythonCommand = 'python'
)
$ErrorActionPreference = 'Stop'
$taskRepo = Split-Path $PSScriptRoot -Parent
$taskWar = (Resolve-Path -LiteralPath $WarPath).Path
$taskModel = Join-Path $taskRepo 'docs/diagrams/chapter_2'
$taskImages = Join-Path $taskRepo 'docs/images/chapter_2'
$taskDsl = Join-Path $taskModel 'workspace.dsl'
# Match the repository's LF policy so source hashes survive a fresh checkout.
$taskDslText = [IO.File]::ReadAllText($taskDsl).Replace("`r`n", "`n")
[IO.File]::WriteAllText($taskDsl, $taskDslText, [Text.UTF8Encoding]::new($false))
$taskExport = Join-Path ([IO.Path]::GetTempPath()) ('cravewallet-c4-' + [Guid]::NewGuid())
New-Item -ItemType Directory -Path $taskExport | Out-Null

& java -jar $taskWar validate -workspace (Join-Path $taskModel 'workspace.dsl')
if ($LASTEXITCODE -ne 0) { throw 'Structurizr DSL validation failed.' }
& java -jar $taskWar export -workspace (Join-Path $taskModel 'workspace.dsl') -format json -output $taskExport
if ($LASTEXITCODE -ne 0) { throw 'Structurizr JSON export failed.' }
& $PythonCommand (Join-Path $PSScriptRoot 'layout-c4.py') (Join-Path $taskExport 'workspace.json') (Join-Path $taskModel 'workspace.json')
if ($LASTEXITCODE -ne 0) { throw 'Native layout update failed.' }
foreach ($taskFormat in @('png', 'svg')) {
    & java -jar $taskWar export -workspace (Join-Path $taskModel 'workspace.json') -format $taskFormat -output $taskExport
    if ($LASTEXITCODE -ne 0) { throw "Structurizr $taskFormat export failed. Use the official Playwright .war build." }
}
$taskViews = [ordered]@{
    SystemContext = 'system-context-revised'
    Containers = 'containers-revised'
    Deployment = 'deployment_diagram'
    SubscriptionComponents = 'subscription-components-revised'
    DeliveryComponents = 'delivery-components-revised'
    PremiumComponents = 'premium-components-revised'
}
foreach ($taskView in $taskViews.Keys) {
    foreach ($taskFormat in @('png', 'svg')) {
        Copy-Item -LiteralPath (Join-Path $taskExport "$taskView.$taskFormat") -Destination (Join-Path $taskImages "$($taskViews[$taskView]).$taskFormat")
        Copy-Item -LiteralPath (Join-Path $taskExport "$taskView-key.$taskFormat") -Destination (Join-Path $taskImages "$($taskViews[$taskView])-key.$taskFormat")
    }
}
$taskManifest = [ordered]@{
    renderer = 'Official Structurizr browser renderer (Playwright build)'
    exported_on = (Get-Date -Format 'yyyy-MM-dd')
    dsl_sha256 = (Get-FileHash -LiteralPath (Join-Path $taskModel 'workspace.dsl') -Algorithm SHA256).Hash.ToLower()
    json_sha256 = (Get-FileHash -LiteralPath (Join-Path $taskModel 'workspace.json') -Algorithm SHA256).Hash.ToLower()
    views = $taskViews
}
$taskManifest | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $taskModel 'structurizr-export.json') -Encoding utf8
Write-Output 'Exported six native C4 diagrams and their keys. The Miro exporter handles DDD only.'
Write-Output "Temporary export files: $taskExport"
