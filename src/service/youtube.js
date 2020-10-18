// import axios from "axios";

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }
  // constructor(key) {
  //   this.youtube = axios.create({
  //     baseURL: "https://www.googleapis.com/youtube/v3",
  //     params: { key: key }, //받아온 key를 key에 설정
  //   });
  // }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: "25",
      },
    });
    return response.data.items;
    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();
    // return result.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: "25",
        q: query,
        type: "video",
      },
    });
    return response.data.items;
    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();
    // return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
