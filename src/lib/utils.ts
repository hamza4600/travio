import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLocalizedText = (
  localizedString: { [x: string]: any; en: any },
  language: string
) => {
  return localizedString[language] || localizedString.en;
};

export function joinStrings(separator: string, ...strings: string[]): string {
  return strings.filter(Boolean).join(` ${separator.trim()} `);
}

export function displayNumber(
  count: number | undefined,
  singular: string,
  plural: string = singular + "s"
): string {
  return count !== undefined
    ? `${count} ${count === 1 ? singular : plural}`
    : `No ${plural}`;
}

export function getChars(chars: string, length: number) {
  if(chars) {
    return chars.length > length ? chars.substring(0, length) + "..." : chars;
  }
}

export const cardButtonTn = {
  en: "View Trip",
  es: "Ver viaje",
  por: "Ver viagem",
}

export const tourPackagesTn = {
  en: "Tour Package",
  es: "Paquete turístico",
  por: "Pacote turístico"
}

export const tourFormTn = {
  en: "Have any questions?",
  es: "¿Tienes alguna pregunta?",
  por: "Tem alguma pergunta?"
}

export const signUpTn = {
  en: "Sign Up",
  es: "Registrarse",
  por: "Inscrever-se"
}

// export const overviewTn = {
//   dur: {
//     en: "Duration",
//     es: "Duración",
//     por: "Duração"
//   },

//   ctr: {

//   }
// }

export const overviewTn = {
  "en": {
    "Duration": "Duration",
    "Countries": "Countries",
    "TripRating": "Trip Rating",
    "AboutThisTour": "About This Tour",
    "Price From": "Price From",
    "BookNow": "Book Now",
    "Cities": "Cities"
  },
  "es": {
    "Duration": "Duración",
    "Countries": "Países",
    "TripRating": "Valoración del viaje",
    "AboutThisTour": "Acerca de este tour",
    "PriceFrom": "Precio desde",
    "BookNow": "Reservar ahora",
    "Cities": "Ciudades"
  },
  "por": {
    "Duration": "Duração",
    "Countries": "Países",
    "TripRating": "Avaliação da viagem",
    "AboutThisTour": "Sobre este passeio",
    "PriceFrom": "Preço a partir de",
    "BookNow": "Reservar agora",
    "Cities": "Cidades"
  }
};

export const topbarTn = {
  "en": {
    "Overview": "Overview",
    "TripHighlights": "Trip Highlights",
    "Itinerary": "Itinerary",
    "Inclusions": "Inclusions",
    "Essentials Travel Information": "Essentials Travel Information",
    "Reviews": "Reviews"
  },
  "es": {
    "Overview": "Descripción",
    "TripHighlights": "Lo más destacado del viaje",
    "Itinerary": "Itinerario", 
    "Inclusions": "Inclusiones",
    "EssentialsTravelInformation": "Información esencial para el viaje",
    "Reviews": "Comentarios"
  },
  "por": {
    "Overview": "Visão geral",
    "TripHighlights": "Destaques da viagem",
    "Itinerary": "Itinerário",  
    "Inclusions": "Inclusões",  
    "EssentialsTravelInformation": "Informações essenciais para viagem",
    "Reviews": "Avaliações" 
  }
}

export const saveTn = {
  en: "You Save",
  es: "Ahorra",
  por: "Poupa"
}

export const simpleThingTn = {
  en: "Keep Things Simple",
  es: "Simplifica las cosas",
  por: "Simplifique as coisas"
}

export const datesTn = {
  en: "These dates don't work for you? Tailor your trip",
  es: "¿Estas fechas no te funcionan? Personaliza tu viaje.",
  por: "¿Estas datas não funcionam para você? Personalize a sua viagem."
}

export const secureTn = {
  en: "Secure Payments",
  es: "Pagos Seguros",
  por: "Pagamentos Seguros"
}

export const priceTitleTn = {
  from: {
    em: "From",
    es: "Desde",
    por: "de"
  },
  price: {
    en: "Price",
    es: "Precio",
    por: "Preço"
  },
  to: {
    en: "To",
    es: "Hasta",
    por: "a"
  }
}

export const membersTn = {
  en: "Member's",
  es: "Del socio",
  por: "Do sócio"
}


export const bookTourTn = {
  en: "Book Tour",
  es: "Reservar tour",
  por: "Reservar tour"
}

export const perPersonTn = {
  en: "Per person in a",
  es: "Por persona en",
  por: "Por pessoa em"
}

export const roomTypeTn = {
  en: "Looking for a Different Room Type?",
  es: "¿Buscas un tipo de habitación diferente?",
  por: "¿Procura um tipo de quarto diferente?"
}

export const exactTn = {
  en: "Find the pricing in the next steps.",
  es: "Encuentra el precio en los próximos pasos.",
  por: "Encontre o preço nas próximas etapas."
}

export const tripTn = {
  en: "Customize your trip",
  es: "Personaliza tu viaje",
  por: "Personalize a sua viagem"
}

export const personalizeTn = {
  en: "with optional tours during booking!",
  es: "¡con excursiones opcionales para reservar durante la compra!",
  por: "¡com passeios opcionais para reservar durante a compra!"
}

export const viewMoreTn = {
  en: "View More",
  es: "Ver más",
  por: "Ver mais"
}

export const viewLessBtn = {
  en: "View Less",
  es: "Ver menos",
  por: "Ver menos"
}

export const nextTn = {
  en: "Next",
  es: "Siguiente",
  por: "Próximo"
}

export const prevTn = {
  en: "Prev",
  es: "Anterior",
  por: "Anterior"
}

export const filterTn = {
  en: "Filter by Rating",
  es: "Filtrar por valoración",
  por: "Filtrar por classificação"
}

export const loadingTn = {
  en: "Loading...",
  es: "Cargando...",
  por: "Carregando..."
}

export const nextStepTn = {
  en: "Next Step",
  es: "Siguiente paso",
  por: "Próximo passo"
}

export const backTn = {
  en: "Back",
  es: "Volver",
  por: "Voltar"
}

export const submitTn = {
  en: "Submit",
  es: "Enviar",
  por: "Enviar",

  submitting: {
    en: "Submitting...",
    es: "Enviando...",
    por: "Procesando..."
  }
}

export const exactTripTn = {
  en: "I know the exact dates of my trip",
  es: "Conozco las fechas exactas de mi viaje.",
  por: "Sei as datas exatas da minha viagem."
}

export const selectMonthTn = {
  en: "Select Month",
  es: "Selecciona mes",
  por: "Selecionar mês"
}

export const approxTn = {
  en: "Trip duration (approx)",
  es: "Duración del viaje (aprox.)",
  por: "Duração da viagem (aprox.)"
}

export const diffDatesTn = {
  en: "I have approximate dates.",
  es: "Engo fechas aproximadas.",
  por: "Tenho datas aproximadas."
} 


export const formFieldsTn = {
  en: {
    name: "Name",
    email: "Email",
    nationality: "Nationality",
    mobile: "Mobile",
    people: "Number of people",
    budget: "Your Budget",
    cate: "Select Categories",
    more: "More Information",
    adults: "Adults",
    children: "Children"
  },

  es: {
    name: "Nombre",
    email: "Correo electrónico",
    nationality: "Nacionalidad",
    mobile: "Móvil",
    people: "Número de personas",
    budget: "Su presupuesto",
    cate: "Seleccionar categorías",
    more: "Más información",
    adults: "Adultos",
    children: "Niños"
  },

  por: {
    name: "Nome",
    email: "Correio eletrônico",
    nationality: "Nacionalidade",
    mobile: "Celular",
    people: "Número de pessoas",
    budget: "Seu orçamento",
    cate: "Selecionar categorias",
    more: "Mais informações",
    adults: "Adultos",
    children: "Crianças"
  }
}

export const moreTn = {
  en: "More Details",
  es: "Más detalles",
  por: "Mais detalhes"
}

export const selNatTn = {
  en: "Select Nationality",
  es: "Seleccionar nacionalidad",
  por: "Selecionar nacionalidade"
}

export const enqTn = {
  en: "Enquire",
  es: "Consultar",
  por: "Consultar"
}