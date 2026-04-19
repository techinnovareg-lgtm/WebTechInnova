import React from 'react';

export interface PlanPricing {
    name: string;
    price: string;
    numericPrice?: number;
    oneTimeNumeric?: number;
    monthlyNumeric?: number;
    period: string;
    description: string;
    features: string[];
    cta: string;
    recommended: boolean;
}

export interface SpecializedApp {
    title: string;
    description: string;
    price: string;
    image: string;
    icon: React.ReactNode;
    url?: string;
}

export interface ResourceService {
    title: string;
    description: string;
    price: string;
    image: string;
    icon: React.ReactNode;
}

export interface PaymentLink {
    name: string;
    description: string;
    gradient: string;
    icon: React.ReactNode;
}

export const easyRentPlans: PlanPricing[] = [
    {
        name: "Plan Desktop",
        price: "S/ 300",
        numericPrice: 300,
        period: "Pago Único",
        description: "Ideal para gestión local segura y permanente.",
        features: ["Propiedad total", "Sin cuotas mensuales", "Red local offline", "Soporte 24/7 WhatsApp"],
        cta: "Adquirir Desktop",
        recommended: false
    },
    {
        name: "Plan Híbrido",
        price: "S/ 300 + S/ 350",
        oneTimeNumeric: 300,
        monthlyNumeric: 350,
        period: "anual",
        description: "Flexibilidad total con respaldo en la nube.",
        features: ["Software local", "Respaldo en la nube", "Actualizaciones", "Soporte 24/7 WhatsApp"],
        cta: "Adquirir Híbrido",
        recommended: true
    },
    {
        name: "Plan Cloud",
        price: "S/ 150",
        numericPrice: 150,
        period: "mensual",
        description: "Acceso total desde cualquier lugar del mundo.",
        features: ["Acceso global web", "Respaldos diarios", "Multidispositivo", "Soporte 24/7 WhatsApp"],
        cta: "Adquirir Cloud",
        recommended: false
    }
];

export const specializedApps: SpecializedApp[] = [
    {
        title: "Control Anestésico",
        description: "Registro clínico completo: signos vitales, medicación y gráficos dinámicos transanestésicos.",
        price: "Bajo Cotización",
        image: "/images/stock/anesthesia.jpg",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
        )
    },
    {
        title: "Labora",
        description: "Sistema web para el control, registro y recuperación de horas no laboradas eficientemente.",
        price: "Bajo Cotización",
        image: "/images/labora/labora_banner.png",
        url: "https://techinnovareg-lgtm.github.io/control-horas-app",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        )
    }
];

export const resourceServices: ResourceService[] = [
    {
        title: "Colección de Plantillas",
        description: "Herramientas de automatización en Excel para finanzas, RRHH y logística corporativa.",
        price: "Desde S/ 45",
        image: "/images/stock/templates.jpg",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
        )
    },
    {
        title: "Consultoría Senior",
        description: "Asesoría personalizada para optimizar tus procesos y arquitectura de software.",
        price: "Bajo Cotización",
        image: "/images/stock/consulting.jpg",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        )
    }
];

export const paymentLinks: PaymentLink[] = [
    {
        name: "Yape / Plin",
        description: "Pagos instantáneos móvil",
        gradient: "linear-gradient(135deg, #74278c, #9c4bb1)",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="4" width="24" height="40" rx="4" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2" />
                <circle cx="24" cy="38" r="2" fill="white" />
                <path d="M18 14 L24 22 L30 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 20 L24 28 L28 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                <text x="24" y="34" textAnchor="middle" fontSize="6" fill="white" fontWeight="800" fontFamily="Arial">YAPE</text>
            </svg>
        )
    },
    {
        name: "Transferencia",
        description: "BCP, Interbank, BBVA",
        gradient: "linear-gradient(135deg, #003a8c, #0050b3)",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 20H42" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M6 34H42" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <rect x="10" y="20" width="4" height="14" fill="white" fillOpacity="0.9" />
                <rect x="18" y="20" width="4" height="14" fill="white" fillOpacity="0.9" />
                <rect x="26" y="20" width="4" height="14" fill="white" fillOpacity="0.9" />
                <rect x="34" y="20" width="4" height="14" fill="white" fillOpacity="0.9" />
                <polygon points="24,8 6,18 42,18" fill="white" />
                <rect x="6" y="34" width="36" height="3" rx="1.5" fill="white" />
            </svg>
        )
    },
    {
        name: "PayPal",
        description: "Tarjetas internacionales",
        gradient: "linear-gradient(135deg, #003087, #009cde)",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="24" y="36" textAnchor="middle" fontSize="36" fontWeight="900" fontFamily="Arial, sans-serif"
                    fill="white" letterSpacing="-2">P</text>
                <text x="30" y="36" textAnchor="middle" fontSize="36" fontWeight="900" fontFamily="Arial, sans-serif"
                    fill="white" fillOpacity="0.4" letterSpacing="-2">P</text>
            </svg>
        )
    }
];

export const controlHorasPlans: PlanPricing[] = [
    {
        name: "Plan Básico Promo",
        price: "Gratis",
        numericPrice: 0,
        period: "1 mes",
        description: "Prueba gratuita de todas las funcionalidades por 1 mes para nuevos usuarios.",
        features: ["Todas func. libres por 1 mes", "Luego pasa a Plan Básico", "Archivo Digital: ver/cargar 3 docs"],
        cta: "Iniciar Promo",
        recommended: false
    },
    {
        name: "Plan Básico",
        price: "S/ 7",
        numericPrice: 7,
        period: "mensual o S/ 70 anual",
        description: "Gestión básica para control de horas y documentos recientes.",
        features: ["Funcionalidades Globales", "Archivo Digital: ver/cargar 3 docs"],
        cta: "Suscribirse Básico",
        recommended: false
    },
    {
        name: "Plan Pro",
        price: "S/ 10",
        numericPrice: 10,
        period: "mensual o S/ 100 anual",
        description: "Control total, almacenamiento en nube e historial completo.",
        features: ["Todos los módulos (y act.)", "Funcionalidades globales y demás liberadas", "Almacenamiento en la nube", "Historial de todo lo generado"],
        cta: "Suscribirse Pro",
        recommended: true
    }
];
