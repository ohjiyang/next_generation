import * as cheerio from "cheerio"

export class Parser {

    static async handleCheckCar(links: string[]) {
        for (let i = 0; i < links.length; i++) {
            //CarIdData.CreateCarId(links[i])
            console.log(links[i])
        }
    }

    static async handleGetHtml(url: string) {
        try {
            const response = await fetch(url);
        
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
        
            const html = await response.text();
        
            return cheerio.load(html)
          } catch (error) {
            console.error('Fetch error:', error);
          }
    }

    public static async handleStartParsing() {
        const links: string[] = []

        const selector = await this.handleGetHtml("https://kolesa.kz/cars/?sort_by=add_date-desc")
        if (selector !== undefined) {
            selector('.a-card__info').each((_, element) => {
                const car_link = selector(element).find("a.a-card__link").attr('href')
                if (car_link !== undefined) {
                    const car_idString = car_link.match(/\d+/g);
                    const car_id = car_idString ? car_idString.join("") : "";
                    links.push(car_id)
                }
            })
        }

        

        await this.handleCheckCar(links)
    }
}