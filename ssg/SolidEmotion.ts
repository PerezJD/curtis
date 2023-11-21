import createCache, {type EmotionCache} from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";

export default class SolidEmotion {

  static createCache(): EmotionCache {
    return createCache({ key: 'css' });
  }

  static createServer(cache: EmotionCache) {
    return createEmotionServer(cache);
  }

}
