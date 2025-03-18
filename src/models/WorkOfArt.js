export class WorkOfArt {
  
  constructor(data) {
    this.id = data.id
    this.altDescription = data.altDescription ?? 'Artwork from' + this.attribution
    this.admirers = data.admirers
    this.attribution = data.attribution
    this.cached = data.cached
    this.color = data.color
    this.description = data.description
    this.height = data.height
    this.width = data.width
    this.imgUrls = data.imgUrls
    
  }
}

// admirers: Array []

// length: 0

// <prototype>: Array []

// altDescription: null

// attribution: "The Cleveland Museum of Art"

// cached: true
// color: "#8c8c73"

// description: "L'ESTAMPE MODERNE: LA VOIX DES SOURCES La Voix des Sources 1899 Part of a set. See all set records Lucien-Hector Monod Imprimerie Champenois (French, 1867–1957) France, 19th century Color lithograph from bound volume containing 50 lithographs, each with a tissue paper guard Support: Cream wove paper https://www.clevelandart.org/art/2014.695.ss"

// height: 3722

// id: "QUacesnj6oc"

// imgUrls: Object { raw: "https://images.unsplash.com/photo-1701206886376-3092811155af?ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258MjQxfGtXRDJkTUN3dnkwfHx8fHwyfHwxNzQyMzI5MDgxfA&ixlib=rb-4.0.3", full: "https://images.unsplash.com/photo-1701206886376-3092811155af?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258MjQxfGtXRDJkTUN3dnkwfHx8fHwyfHwxNzQyMzI5MDgxfA&ixlib=rb-4.0.3&q=85", regular: "https://images.unsplash.com/photo-1701206886376-3092811155af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258MjQxfGtXRDJkTUN3dnkwfHx8fHwyfHwxNzQyMzI5MDgxfA&ixlib=rb-4.0.3&q=80&w=1080", … }

// originalLink: "https://unsplash.com/photos/a-painting-of-a-woman-in-a-green-dress-QUacesnj6oc"

// slug: "a-painting-of-a-woman-in-a-green-dress-QUacesnj6oc"
// width: 4625