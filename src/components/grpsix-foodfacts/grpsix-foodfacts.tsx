import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'grpsix-foodfacts',
  styleUrl: 'grpsix-foodfacts.css',
  shadow: true,
})
export class GrpsixFoodfacts {

@Prop() sourceOne : string;
@Prop() altOne : string;
@Prop() sourceTwo : string;
@Prop() altTwo : string;
@Prop() sourceThree : string;
@Prop() altThree : string;

  render() {
    return (
      <Host>
          <div class="container-fluid">
            <div class="card" id="cardOne">
              <img src={this.sourceOne} alt={this.altOne} class="card-img-top"/>
              {/*Quelle:https://stock.adobe.com/de/search/free?k=erdbeere&search_type=usertyped&asset_id=209315024*/}
              <div class="card-body">
                <h3 class="card-title">FOOD FACTS: Erdbeere</h3>
                <details>
                  <summary>Die süße Versuchung
                    <p id="button">more</p>
                  </summary>
                  <p>
                    <br/>
                    <br/>
                    blabla
                  </p>
                </details>
              </div>
            </div>

            <div class="card" id="cardTwo">
              <img src={this.sourceTwo} alt={this.altTwo} class="card-img-top"></img>
              {/*Quelle:https://stock.adobe.com/de/search/free?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bfree_collection%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=erdnuss&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=erdnuss&get_facets=1&asset_id=90883677*/}
              <div class="card-body">
                <h3 class="card-title">FOOD FACTS: Erdnuss</h3>
                <details>
                  <summary>Eigentlich gar keine Nuss
                    <p id="button">more</p>
                  </summary>
                  <p>
                    <br/>
                    <br/>
                    blabla
                  </p>
                </details>
              </div>
            </div>

            <div class="card"  id="cardThree">
              <img src={this.sourceThree} alt={this.altThree} class="card-img-top"></img>
              {/*Quelle:https://stock.adobe.com/de/images/%E3%82%A2%E3%82%B9%E3%83%91%E3%83%A9%E3%82%AC%E3%82%B9/86417804?asset_id=86417804*/}
              <div class="card-body">
                <h3 class="card-title">FOOD FACTS: Spargel</h3>
                <details>
                  <summary>Über oder unter der Erde
                    <p id="button">more</p>
                  </summary>
                  <p>
                    <br/>
                    <br/>
                    blabla
                  </p>
                </details>
              </div>
            </div>
          </div>
          <slot></slot>
      </Host>
    );
  }
}