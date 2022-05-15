import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css',
})
export class FooterComponent {
  componentDidLoad() {
  }

  render() {
    return (
      <span class="footer">
        <span class="footer-container">
          <span class="footer-subcontainer">
            <span>KNUSPERNEWS</span>
            <span class="footer-subcontainer-label">Vorname</span>
            <input type="text" id="vorname"></input>
            <span class="footer-subcontainer-label">E-Mail*</span>
            <input type="text" id="email"></input>
          </span>
          <span class="footer-subcontainer">
            <img src="https://www.dsshow.de/vertrieb/platzhalter-logo/"></img>
          </span>
          <span class="footer-subcontainer">
            <span>KATEGORIEN</span>
            <span class="footer-subcontainer-label"></span>
            <select name="kategorien" id="kategorien">
              <option value="kategorie1">Fleischgerichte</option>
              <option value="kategorie2">Vegane Gerichte</option>
              <option value="kategorie3">Backwaren</option>
              <option value="kategorie4">Kategorie</option>
            </select>
          </span>
        </span>
      </span>
    );
  }
}
