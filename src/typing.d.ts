interface Data { 
    headline: string;
    teaser: Teaser[];
}

interface Teaser {
    id: number;
    headline: string;
    text: string;
    image: Image;
    link: Link;
    category: string[];
}

interface Stage {
    id: number;
    category: string;
    headline: string;
    image: Image;
    link?: Link;
}

interface Image { 
    altText: string;
    srcSet: srcSet[];
}

interface srcSet { 
    query: string;
    path: string
}

interface Link { 
    text: string;
    titel: string;
    href: string;
    target?: string;
}

