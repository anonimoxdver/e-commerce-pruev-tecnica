export interface ProductProps {
    nombre: string;
    slug: string;
    image: string;
    descripcion: string;
    inventario?: number;
    precio: number; 
    id?: string;
}

export interface SeedData {
    products: ProductProps[]
}

export const InitialData: SeedData = {
    products: [
        {
            nombre: 'Agitador Magnético con Placa de Calentamiento',
            slug: 'Agitador-Magnético-con-Placa-de-Calentamiento',
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1667508246/e-commerce/Agitador-Magnetico-con-Placa-de-Calentamiento_vwq5mp.jpg',
            descripcion: 'El agitador magnético con placa de calentamiento ICB es una de las herramientas más útiles en el laboratorio Clínico.',
            inventario: 10,
            precio: 2232142,
        },
        {
            nombre: 'Centrífugas Refrigeradas de Alta Velocidad 24x1.5 ml',
            slug: 'Centrífugas-Refrigeradas-de-Alta-Velocidad-24x1.5-ml',
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1667508276/e-commerce/Centrifuga-8-Plazas-1_c6oqap.jpg',
            descripcion: 'Las centrífugas Refrigeradas de Alta Velocidad ICB están diseñadas para cumplir con todos los requerimientos de los laboratorios modernos',
            inventario: 6,
            precio: 14742000,
        },
        {
            nombre: 'Centrífugas ICB-FUGE II 6 Plazas 50 ml',
            slug: 'Centrífugas-ICB-FUGE-II-6-Plazas-50-ml',
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1667508276/e-commerce/Centrifuga-FUGE-IV-4X100ml_l7ju5w.jpg',
            descripcion: 'Las Centrífugas ICB están diseñadas para cumplir con todos los requerimientos de los laboratorios modernos y son utilizadas además en bancos de sangre, centros de investigación, hospitales, etc.',
            inventario: 5,
            precio: 4111357,
        },
        {
            nombre: 'Agitador vortex Mixer XH-D',
            slug: 'Agitador-vortex-Mixer-XH-D',
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1667508343/e-commerce/Vortex-XH-D_sceaqv.jpg',
            descripcion: 'El Agitador Vortex Mixer XH-D es un equipo indispensable en los laboratorios de biología, química, en el laboratorio del hospital y laboratorio clínico. Es ideal para mezclar el contenido de un tubo de muestra o reactivo, obteniendo así, una mezcla homogénea.',
            inventario: 12,
            precio: 852500,
        },
        {
            nombre: 'Microscopios Prisma Triocular 207-T',
            slug: 'Microscopios-Prisma-Triocular-207-T',
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1667508358/e-commerce/Prisma-207-T-400x423_hjovz4.jpg',
            descripcion: 'Los Microscopios Prisma Triocular están diseñados para darle una gran calidad en su óptica. El diseño ergonómico del modelo Prisma 207-T es una clara muestra que la calidad y la economía pueden ir de la mano. Sus campos de aplicación van desde escuelas, laboratorios clínicos, laboratorios bacteriológicos etc.',
            inventario: 10,
            precio: 1733600,
        },
        {
            nombre: 'Agitador vortex Mixer ECO JJ',
            slug: 'Agitador-vortex-Mixer-ECO-JJ',
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1667508368/e-commerce/AGITADOR-Vortex-ECO-JJ-AVJ100217_hu42yq.jpg',
            descripcion: 'El agitador Vortex Mixer ECO JJ es ideal para mezclar el contenido de un tubo de muestra o reactivo, obteniendo así, una mezcla homogénea. Es un equipo indispensable en los laboratorios de biología, química, en el laboratorio del hospital y laboratorio clínico. Cuenta con un modo continuo y uno de encendido mediante presión con una velocidad de 3,000 RPM.',
            inventario: 25,
            precio: 436700
        },
    ]
} 