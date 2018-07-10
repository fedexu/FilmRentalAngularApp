import { Injectable } from '@angular/core';
import { Http, RequestMethod, RequestOptions, Request } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class HttpApiService {

  constructor(
    private http: Http,
    private loaderService:LoaderService) { }

  public get(url: string, queryParams?: any, pathParams?: string[]) {
    return this.request(url, RequestMethod.Get, null, queryParams, pathParams);
  }

  public post(url: string, body: Object, queryParams?: any, pathParams?: string[]) {
    return this.request(url, RequestMethod.Post, body, queryParams, pathParams);
  }

  public put(url: string, body: Object, queryParams?: any, pathParams?: string[]) {
    return  this.request(url, RequestMethod.Put, body, queryParams, pathParams);
  }

  public patch(url: string, body: Object, queryParams?: any, pathParams?: string[]) {
    return this.request(url, RequestMethod.Patch, body, queryParams, pathParams);
  }

  public delete(url: string, body: Object, queryParams?: any, pathParams?: string[]) {
    return this.request(url, RequestMethod.Delete, body, queryParams, pathParams);
  }

  private request(url: string, method: RequestMethod, body?: Object, queryParams?: any, pathParams?: string[]): Observable<any> {

    const requestOptions = new RequestOptions({
      url: pathParams? pathParams.reduce((path, param) => `${path}\/${param}`, url): url,
      method: method
    });

    if (body) {
      requestOptions.body = body;
    }

    if (queryParams) {
      requestOptions.params = queryParams;
    }

    const request = new Request(requestOptions);

    this.loaderService.loaderBarActive.next(true);

    //Manipulate the response before sending to the subscribed
    return this.http.request(request).pipe(
      map((response: Response) => {
        //Possible manipulation of the response here
        this.loaderService.loaderBarActive.next(false);
        return response.json();
      })
    );

  }
}
