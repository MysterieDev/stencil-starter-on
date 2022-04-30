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
                    <u><b>1.</b> Erdbeeren sind eigentlich gar keine Früchte.</u>
                  </p>
                  <p> Botanisch betrachtet ist die Erdbeere eine Sammelnussfrucht.
                      Die kleinen Körnchen, die so gerne zwischen den Zähnen hängen bleiben, sind die eigentlichen Früchte.
                      Das Fruchtfleisch ist eine verdickte Blütenachse und hält diese ganzen Früchte zusammen: deshalb Sammelfrucht.
                  </p>
                  <p><u><b>2.</b> Es gibt mehr als 600 Sorten.</u></p>
                  <p> Sogar eine weiße Erdbeere ist darunter!</p>
                  <p><u><b>3.</b> Die Frucht hat mehr Vitamin C als Orangen.</u></p>
                  <p> Erdbeeren sind also nicht nur lecker, sondern sind auch super für das Immunsystem.</p>
                  <p><u><b>4.</b> Keine klimakterischen Früchte.</u></p>
                  <p> Klimakterische Früchte sind Obst- und Gemüsesorten, die nach der Ernte nachreifen.
                      Doch genau das tun Erdbeeren nicht. Wenn Erdbeeren geerntet wurden, werden sie nicht mehr süßer.</p>
                  <p><u><b>5.</b> Wenig Kalorien, viel Wasser.</u></p>
                  <p>Pro 100 Gramm enthalten Erdbeeren nur rund 30 Kilokalorien. Rund 90% ist Wasser und ca. 5% Zucker.</p>
                  {/*Quelle der Erdbeer-facts:https://foodlovin.de/7-fakten-ueber-erdbeeren-die-du-sicher-noch-nicht-kennst/*/}
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
                    <u><b>1.</b> Erdnüsse sind eigentlich keine Nüsse.</u>
                  </p>
                  <p> Tatsächlich ist der Name "Erdnuss" etwas irreführend, denn Erdnüsse werden botanisch gesehen nicht zu den Nüssen gezählt.
                      Erdnüsse sind tatsächlich mehr mit Bohnen und Erbsen verwandt als mit Mandeln oder anderen Nüssen.
                  </p>
                  <p><u><b>2.</b> Super viele Nährstoffe enthalten.</u></p>
                  <p> Erdnüsse schmecken nicht nur lecker, sondern enthalten viel pflanzliches Eiweiß, Fett und andere wichtige Nährstoffe, die sich positiv auf die Gesundheit auswirken können.
                      Allerdings sind Erdnüsse ziemlich fetthaltig und somit kleine Kalorienbomben.</p>
                  <p><u><b>3.</b> Kleine Protein-Wunder.</u></p>
                  <p> Mit 25 Gramm Eiweiß stehen Erdnüsse sogar bei den proteinreichsten Nüssen und Samen ganz oben auf der Liste – sie werden nicht ohne Grund zu den Hülsenfrüchten gezählt.</p>
                  <p><u><b>4.</b> Erdnüsse stärken Nerven und Gehirn.</u></p>
                  <p> Da Erdnüsse einen hohen Gehalt an Magnesium haben, sind sie der perfekte Snack für geistige Anstrengungen, da das Nervensystem durch Magnesium vor Stress geschützt wird – die Nerven und die Muskeln profitieren davon.</p>
                  <p><u><b>5.</b> Krankheiten kann vorgebeugt werden.</u></p>
                  <p>Ob Herzinfarkt, Diabetes oder Schlaganfall: Erdnüsse können offenbar davor schützen und das Risiko deutlich senken. Das ergaben mehrere voneinander unabhängige Studien. Dabei genügt schon der Verzehr von kleinen Mengen (15 Gramm Erdnüsse täglich).</p>
                  {/*Quelle der Erdnuss-facts: https://eatsmarter.de/ernaehrung/wie-gesund-ist/erdnuss*/}
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
                    <u><b>1.</b> "Junger Trieb".</u>
                  </p>
                  <p> "Asparagus officinalis" nennen Botaniker den Gemüsespargel. Asparagus kommt aus dem Lateinischen bzw. dem Altgriechischen und heißt „junger Trieb“.
                  </p>
                  <p><u><b>2.</b> Grün, weiß oder doch lila?</u></p>
                  <p> Der weiße Spargel wird auch Bleichspargel genannt, denn er bleibt nur so schön weiß, weil er ohne Sonnenlicht im Erdwall wächst.
                    Lugt der Spargel aus der Erde, färbt er sich zunächst violett.
                    Grüner Spargel wächst ohne Erdwall direkt im Sonnenlicht.</p>
                  <p><u><b>3.</b> Grüner Spargel schmecht am würzigsten.</u></p>
                  <p> Grüner Spargel bildet mit Hilfe des Sonnenlichts grünes Chlorophyll, aber auch mehr Carotin (eine Vorstufe von Vitamin A) und mehr Vitamin C.
                    Zudem entwickeln sich mehr Aromastoffe, so dass grüner Spargel würziger schmeckt.</p>
                  <p><u><b>4.</b> Nicht zu weit unten abschneiden!</u></p>
                  <p> Wenn der Spargel bei der Ernte zu dicht am Wurzelstock abgeschnitten wird, schmeckt er später bitter.
                    Denn die Teile nah an der Wurzel enthalten mehr Bitterstoffe.</p>
                  <p><u><b>5.</b> Asparagusinsäure sorgt für Aroma.</u></p>
                  <p>Verantwortlich für den typischen Spargel-Geschmack mit leicht bitterer Note ist vor allem die Asparagusinsäure. Sie entwickelt ihr Aroma jedoch erst beim Kochen.</p>
                  {/*Quelle der Spargel-facts:https://aramark-foodboost.de/10-funfacts-spargel/*/}
                </details>
              </div>
            </div>
          </div>
          <slot></slot>
      </Host>
    );
  }
}