workspace "CraveWallet" "C4: contexto, contenedores, componentes y despliegue TB1." {
    !impliedRelationships false
    model {
        user = person "Usuario" "Estudiante o profesional joven que controla suscripciones y gastos."
        visitor = person "Visitante" "Conoce la propuesta y accede a la descarga de la app."
        rates = softwareSystem "ExchangeRate-API" "Cotizaciones para estimar importes en soles." "Externo"
        stripe = softwareSystem "Stripe (propuesto)" "Checkout y facturación del plan de CraveWallet; integración pendiente." "Externo,Propuesto"
        places = softwareSystem "Google Places (propuesto)" "Sugerencias de comercios; integración pendiente." "Externo,Propuesto"
        calendar = softwareSystem "Calendario de Android" "Eventos del cliente con permisos; validación en dispositivo pendiente." "Externo"
        cw = softwareSystem "CraveWallet" "Registra suscripciones y Delivery, estima importes en soles y prepara recordatorios. Premium forma parte del diseño pendiente." {
            landing = container "Landing Page" "Presenta la propuesta y ofrece acceso a la app; publicada en Vercel." "Next.js / React / Tailwind CSS" "Web"
            mobile = container "Aplicación Android" "Formularios, Dashboard, autenticación, API y avisos locales. APK generado; falta validar en dispositivo." "Kotlin / Jetpack Compose" "Móvil"
            local = container "Almacenamiento local" "Preferencias, notas, sesión y datos de demostración. Los registros conectados se conservan en el backend." "SharedPreferences / JSON" "Datos"
            remote = container "Base de datos" "Estado canónico de usuarios, sesiones, suscripciones, gastos y presupuestos; esquema de Premium propuesto." "PostgreSQL 17" "Datos"
            api = container "REST API Backend" "Suscripciones, Delivery y autenticación implementados; Premium y Places pendientes. Publicado con perfil prod." "Java 21 / Spring Boot" {
                subController = component "SubscriptionController" "Traduce solicitudes autenticadas a comandos y DTO de recordatorios." "Spring MVC" "Suscripciones"
                subService = component "Subscription Application Service" "Coordina registro, edición, cancelación local y consultas." "Servicio de aplicación" "Suscripciones"
                subDomain = component "Subscription / Money" "Reglas de importe, moneda, ciclo y estado del registro." "Modelo de dominio" "Suscripciones"
                subRepo = component "JpaSubscriptionRepository" "Persiste y consulta registros por propietario." "JPA / Spring Data" "Suscripciones"
                exchange = component "ExchangeRateApiAdapter" "Traduce cotizaciones a ExchangeRate con fecha y disponibilidad." "Adaptador / HTTPS" "Suscripciones"
                planAccess = component "PremiumStatusPort (propuesto)" "Contrato local de nivel y límite; integración Premium pendiente." "Puerto de colaboración" "Suscripciones,Propuesto"
                deliveryController = component "DeliveryExpenseController" "Recibe gastos, presupuestos y consultas del propietario." "Spring MVC" "Gastos"
                deliveryService = component "Delivery Expense Application Service" "Coordina gasto y presupuesto, reintentos y cálculo del exceso." "Servicio de aplicación" "Gastos"
                deliveryDomain = component "DeliveryExpense / MonthlyBudget" "Agregados distintos vinculados por usuario y período." "Modelo de dominio" "Gastos"
                deliveryRepo = component "Repositorios de gastos y presupuestos" "Guarda gasto y presupuesto dentro de la transacción." "JPA / Spring Data" "Gastos"
                placesAdapter = component "GooglePlacesAdapter (propuesto)" "Traduce a MerchantSuggestion; conserva el registro manual." "ACL / HTTPS" "Gastos,Propuesto"
                premiumController = component "PremiumController" "Checkout, estado, historial y cancelación de renovación." "Spring MVC" "Premium,Propuesto"
                premiumService = component "Premium Application Service" "Correlación, deduplicación y vigencia tras pago verificado." "Servicio de aplicación" "Premium,Propuesto"
                premiumDomain = component "Plan / BillingEvent" "Nivel, vigencia y facturación; conserva el período pagado." "Modelo de dominio" "Premium,Propuesto"
                premiumRepo = component "JpaPlanRepository / billing_events" "Persiste plan y eventos; unicidad del identificador externo." "JPA / PostgreSQL" "Premium,Propuesto"
                gateway = component "StripeGatewayAdapter" "PaymentGatewayPort para checkout y cancelación." "ACL / Stripe API" "Premium,Propuesto"
                webhook = component "StripeWebhookController / Adapter" "Verifica firma y traduce eventos; no usa el JWT del usuario." "Spring MVC / ACL" "Premium,Propuesto"
            }
        }
        user -> cw "Registra y consulta suscripciones y gastos"
        visitor -> cw "Conoce la propuesta y accede a la app"
        userCheckout = user -> stripe "Completa el pago del plan (propuesto)" {
            tags "Propuesto"
        }
        cw -> rates "Consulta cotizaciones"
        cw -> calendar "Prepara eventos desde el móvil"
        cw -> stripe "Solicita checkout y cancelación (propuesto)" {
            tags "Propuesto"
        }
        stripe -> cw "Notifica pago y fin del plan (propuesto)" {
            tags "Propuesto"
        }
        cw -> places "Consulta sugerencias (propuesto)" {
            tags "Propuesto"
        }
        user -> mobile "Usa formularios y resúmenes" "Interfaz Android"
        visitor -> landing "Consulta la propuesta" "HTTPS"
        landing -> mobile "Ofrece acceso a la descarga" "Enlace de descarga"
        mobile -> api "Autentica y ejecuta casos de uso" "HTTPS / JSON"
        mobile -> local "Lee y guarda datos locales" "API SharedPreferences"
        mobile -> calendar "Crea, reprograma o retira eventos" "CalendarContract / permisos"
        mobile -> stripe "Abre checkout (propuesto)" "HTTPS" {
            tags "Propuesto"
        }
        api -> remote "Lee y persiste estado" "JPA / JDBC"
        api -> rates "Consulta cotizaciones" "HTTPS / JSON"
        api -> stripe "Crea checkout y cancela renovación (propuesto)" "HTTPS / Stripe API" {
            tags "Propuesto"
        }
        stripe -> api "Entrega eventos verificados (propuesto)" "HTTPS / webhook firmado" {
            tags "Propuesto"
        }
        api -> places "Consulta comercios (propuesto)" "HTTPS / JSON" {
            tags "Propuesto"
        }
        mobile -> subController "Gestiona suscripciones y consulta recordatorios" "HTTPS / JSON"
        subController -> subService "Envía comandos y consultas"
        subService -> subDomain "Aplica invariantes"
        subService -> subRepo "Guarda y consulta por propietario"
        subService -> exchange "Solicita cotización mediante ExchangeRatePort"
        subService -> planAccess "Consulta acceso y límite (propuesto)" {
            tags "Propuesto"
        }
        planAccess -> premiumService "Consume contrato local (propuesto)" {
            tags "Propuesto"
        }
        subRepo -> remote "Lee y escribe tablas de Suscripciones" "JPA / JDBC"
        exchange -> rates "Consulta el proveedor" "HTTPS / JSON"
        mobile -> deliveryController "Registra gastos y consulta resumen" "HTTPS / JSON"
        deliveryController -> deliveryService "Envía comandos y consultas"
        deliveryService -> deliveryDomain "Aplica reglas de gasto y presupuesto"
        deliveryService -> deliveryRepo "Persiste con deduplicación"
        deliveryService -> placesAdapter "Busca sugerencias mediante puerto (propuesto)" {
            tags "Propuesto"
        }
        deliveryRepo -> remote "Lee y escribe tablas de Gastos" "JPA / JDBC"
        placesAdapter -> places "Consulta y traduce comercios (propuesto)" "HTTPS / JSON" {
            tags "Propuesto"
        }
        mobile -> premiumController "Solicita checkout, estado y cancelación (propuesto)" "HTTPS / JSON" {
            tags "Propuesto"
        }
        premiumController -> premiumService "Envía comandos y consultas" {
            tags "Propuesto"
        }
        premiumService -> premiumDomain "Aplica vigencia y nivel confirmados" {
            tags "Propuesto"
        }
        premiumService -> premiumRepo "Guarda plan y eventos en una transacción" {
            tags "Propuesto"
        }
        premiumService -> gateway "Solicita checkout o fin de renovación" {
            tags "Propuesto"
        }
        gateway -> stripe "Invoca al proveedor" "HTTPS / Stripe API" {
            tags "Propuesto"
        }
        stripe -> webhook "Entrega evento de facturación" "HTTPS / webhook firmado" {
            tags "Propuesto"
        }
        webhook -> premiumService "Entrega evento verificado y correlacionado" {
            tags "Propuesto"
        }
        premiumRepo -> remote "Lee y escribe tablas de Premium (propuesto)" "JPA / JDBC" {
            tags "Propuesto"
        }
        tb1 = deploymentEnvironment "TB1 verificado y cliente por validar" {
            deploymentNode "Dispositivo Android" "Destino del APK; prueba física pendiente." "Android 8 o superior" {
                deploymentNode "CraveWallet APK" "Generado y probado con Robolectric; no acredita instalación física." "Android Runtime / Kotlin" {
                    containerInstance mobile
                    containerInstance local
                }
                softwareSystemInstance calendar
            }
            deploymentNode "Vercel" "Landing publicada; independiente del REST API." "Hosting estático / HTTPS" {
                containerInstance landing
            }
            deploymentNode "Render — Oregon" "Incremento TB1 publicado; plan gratuito temporal." "Plataforma administrada" {
                deploymentNode "Servicio cravewallet-api" "HTTPS público; perfil prod; proceso sin root; variables privadas." "Docker / Java 21" {
                    containerInstance api
                }
                deploymentNode "PostgreSQL administrado" "Acceso externo bloqueado; conexión interna; Flyway V1–V3." "Render PostgreSQL 17" {
                    containerInstance remote
                }
            }
            deploymentNode "Proveedor de cotizaciones" "Proveedor externo consultado por el backend." "Servicio HTTPS" {
                softwareSystemInstance rates
            }
        }
    }
    views {
        systemContext cw "SystemContext" "Usuarios e integraciones actuales y propuestas." {
            include user visitor cw rates stripe places calendar
            autoLayout tb 350 400
            title "CraveWallet — Contexto del sistema"
        }
        container cw "Containers" "Aplicaciones, almacenamiento y tecnologías." {
            include user visitor landing mobile api local remote rates stripe places calendar
            exclude userCheckout
            autoLayout tb 350 400
            title "CraveWallet — Contenedores"
        }
        component api "SubscriptionComponents" "Diseño de Subscription Management." {
            include "element.tag==Suscripciones"
            include mobile remote rates premiumService
            autoLayout tb 350 350
            title "CraveWallet — Componentes de Suscripciones (diseño)"
        }
        component api "DeliveryComponents" "Diseño de Delivery Expense Management." {
            include "element.tag==Gastos"
            include mobile remote places
            autoLayout tb 350 350
            title "CraveWallet — Componentes de Gastos (diseño)"
        }
        component api "PremiumComponents" "Diseño de Premium pendiente de implementación." {
            include "element.tag==Premium"
            include mobile remote stripe
            autoLayout tb 350 350
            title "CraveWallet — Componentes de Premium (propuesto)"
        }
        deployment cw tb1 "Deployment" "Instancias sobre infraestructura acreditada; Android por validar." {
            include *
            autoLayout lr 350 350
            title "CraveWallet — Despliegue TB1 y cliente Android por validar"
        }
        styles {
            element "Element" {
                color #ffffff
            }
            element "Person" {
                shape Person
                background #08427b
            }
            element "Software System" {
                background #1168bd
            }
            element "Container" {
                background #438dd5
            }
            element "Component" {
                background #85bbf0
                color #102b46
            }
            element "Externo" {
                background #777777
                color #ffffff
            }
            element "Móvil" {
                shape MobileDevicePortrait
            }
            element "Web" {
                shape WebBrowser
            }
            element "Datos" {
                shape Cylinder
            }
            element "Deployment Node" {
                color #263238
                background #ffffff
            }
            element "Propuesto" {
                stroke #b45309
                border Dashed
            }
            relationship "Relationship" {
                color #4b5563
                routing Direct
                dashed false
            }
            relationship "Propuesto" {
                color #b45309
                dashed true
            }
        }
    }
}
