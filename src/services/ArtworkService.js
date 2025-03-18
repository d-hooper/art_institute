import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { WorkOfArt } from "@/models/WorkOfArt.js"

class ArtworkService {
  
  async getArtwork() {
    const response = await api.get('api/artworks')
    const artwork = response.data.artworks.map(pojo => new WorkOfArt(pojo))
    logger.log(response.data)
    AppState.artwork = artwork
    logger.log(AppState.artwork)
  }

}

export const artworkService = new ArtworkService()