import { Page } from "../base/page";
import { Button_1 } from "../../components/buttons/buttons";

export class NewsDetailPage extends Page {

    public StringUpperCase(text:string){
         return text.toUpperCase();
    }

    constructor () {
        super();
        this.onLoad();
        this.onFullLoad();
    }

    onLoad(): void {
        const test:string = "asdadsas";
        const button = new Button_1;
        const button2 = button.Button2("deneme button2");
        console.log(this.StringUpperCase("testdeneme"));
    }

    onFullLoad(): void {
        console.log('test');
	}   
}

new NewsDetailPage;