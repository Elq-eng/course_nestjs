import axios from "axios";


export interface HttpAdapter {
  get<T>( url:string ): Promise<T>
}

export class PokeAPIFetchAdapter implements HttpAdapter{

  async get<T>( url: string): Promise<T> {
    const resp = await fetch(url);
    const data = await resp.json();
    return data
  }
}


export class PokeApiAdapter implements HttpAdapter{

  private readonly axios = axios;

  async get<T>( url: string ): Promise<T>{
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  // async post( url: string, data: any){

  // }
  // async patsh ( utl: string, data: any){

  // }
  // async delete( url: string, data:any ){

  // }


}