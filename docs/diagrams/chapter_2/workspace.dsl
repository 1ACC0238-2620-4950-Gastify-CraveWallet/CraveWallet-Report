workspace "CraveWallet" "Arquitectura propuesta: contexto y contenedores" {
    !impliedRelationships false
    model {
        user = person "Usuario" "Estudiante o profesional joven que controla compromisos y gastos."
        rates = softwareSystem "ExchangeRate-API" "Cotizaciones USD/PEN." "External"
        stripe = softwareSystem "Stripe" "Checkout y facturacion del plan de CraveWallet." "External"
        places = softwareSystem "Google Places" "Sugerencias de comercios." "External"
        calendar = softwareSystem "Calendario del dispositivo" "Recordatorios con permiso del usuario." "External"
        cw = softwareSystem "CraveWallet" "Registra suscripciones y delivery; estima importes en soles, prepara avisos y administra su plan propio." {
            tags "Internal"
            mobile = container "Mobile App" "Formularios, Dashboard, permisos y recordatorios." "Flutter / Dart" "Internal"
            api = container "REST API Backend" "Modulos de Suscripciones, Gastos y Premium; autenticacion y adaptadores." "Java 21 / Spring Boot" "Internal"
            local = container "Local Database" "Cache de lectura con fecha de actualizacion." "SQLite" "Internal,Database"
            remote = container "Remote Database" "Estado canonico y tablas propiedad de cada modulo." "PostgreSQL" "Internal,Database"
        }
        user -> cw "Registra y consulta por el movil"
        userCheckout = user -> stripe "Completa el pago en checkout del proveedor"
        cw -> rates "Consulta cotizacion USD/PEN"
        cw -> stripe "Solicita checkout y cancelacion"
        stripe -> cw "Notifica pago y fin del plan"
        cw -> places "Consulta sugerencias"
        cw -> calendar "Crea, reprograma o retira avisos mediante el cliente movil"

        user -> mobile "Usa formularios y resumenes" "Interfaz movil"
        mobile -> api "Ejecuta casos de uso" "HTTPS / JSON"
        mobile -> stripe "Abre checkout del proveedor para completar el pago" "HTTPS / Stripe checkout"
        mobile -> local "Lee y actualiza cache" "SQLite API local"
        mobile -> calendar "Crea, reprograma o retira avisos" "API nativa del dispositivo"
        api -> remote "Lee y persiste estado" "JPA / JDBC"
        api -> rates "Consulta cotizacion USD/PEN" "HTTPS / JSON"
        api -> stripe "Crea checkout y cancela renovacion" "HTTPS / Stripe API"
        stripe -> api "Entrega eventos de facturacion" "HTTPS / webhook firmado"
        api -> places "Consulta comercios" "HTTPS / JSON"
    }
    views {
        systemContext cw "SystemContext" {
            include user cw rates stripe places calendar
            autoLayout tb
            title "CraveWallet - Contexto del sistema (propuesta)"
        }
        container cw "Containers" {
            include user mobile api local remote rates stripe places calendar
            exclude userCheckout
            autoLayout lr
            title "CraveWallet - Contenedores (propuesta)"
        }
        styles {
            element "Element" {
                background #edf3f8
                color #18324a
                stroke #8196a8
            }
            element "Person" {
                shape Person
            }
            element "Internal" {
                background #daeafd
            }
            element "Database" {
                shape Cylinder
            }
            relationship "Relationship" {
                color #18324a
                routing Orthogonal
            }
        }
    }
}
