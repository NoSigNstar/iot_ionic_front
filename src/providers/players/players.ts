import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
export class PlayersProvider {

    constructor(public api: Api) { }

    findTenLastUsers() {
        return this.api.get('user');
    }
}
