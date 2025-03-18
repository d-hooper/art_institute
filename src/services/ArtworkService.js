import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { WorkOfArt } from "@/models/WorkOfArt.js"

class ArtworkService {
  async changePage(page) {
    const response = await api.get(`api/artworks?page=${page}`) 
    this.handleResponse(response)

  }
  
  async getArtwork() {
    const response = await api.get('api/artworks')
    this. handleResponse(response)
  }

   handleResponse(response) {
    const artwork = response.data.artworks.map(pojo => new WorkOfArt(pojo))
    AppState.artwork = artwork
    AppState.currentPage = response.data.page
    AppState.pageCount = response.data.pages
  }

}

export const artworkService = new ArtworkService()