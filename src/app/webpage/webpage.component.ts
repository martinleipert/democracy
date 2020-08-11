import { Component, OnInit } from '@angular/core';
import { Brick } from '../argument/brick';
import M from 'materialize-css';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent implements OnInit {
  highlight = 'Wir können jederzeit Unterstützung gebrauchen!';

  ideasHeadline = 'Ideen & Anträge';
  ideasBrick: Brick[] = [
    {
      title: 'Entwickeln',
      text: `Das Herz einer Partei sind politische Ideen, Anträge und Debatten. Unsere App ermöglicht es Ideen
      gemeinsam zu entwickeln. Ein integriertes Vorschlags- und Abstimmungssystem strukturiert den
      Erstellprozess.`
    },
    {
      title: 'Automatisieren',
      text: `Die Idee wird automatisch an Events zur Beratung und Entscheidung weitergeleitet.`
    },
    {
      title: 'Teilen',
      text: `Ideen werden beworben und in andere soziale Netzwerke geteilt. Wer die Idee gut findet, kann die Idee
      klonen.`
    },
    {
      title: 'Vereinfachen',
      text: `Neue Supporter stärken die Relevanz. Mehr Raum für die Idee, weniger Raum für die
      Bürokratie.`
    }
  ];

  ideasImages: string[] = [
    '../assets/images/gifs/idee/Idee erstellen.gif',
    '../assets/images/gifs/idee/Idee bearbeiten1.gif',
    '../assets/images/gifs/idee/Idee bearbeiten2.gif',
    '../assets/images/gifs/idee/Idee bearbeiten3.gif',
    '../assets/images/gifs/idee/Idee teilen.gif',
    '../assets/images/gifs/idee/Idee unterstuetzer.gif'
  ];

  groupsHeadline = 'Gruppen';
  groupsBrick: Brick[] = [
    {
      title: 'Organisieren',
      text: `Jede Gliederung hat ihren eigenen "Space". Ein gewähltes Administratorenteam leitet den Space.
      Ein Wiki bietet eine Übersicht über gewählte
      Mandatsträger, Untergruppen und politische Kerninhalte.`
    },
    {
      title: 'Diskutieren',
      text: `Jeder Space enthält einen Stream, in dem gemeinsam diskutiert wird. Tools zum Projektmanagement und ein
      Event-Tool ermöglichen mehr Power im Wahlkampf!`
    },
    {
      title: 'Informieren',
      text: `Alle Mitglieder werden automatisch über News informiert.`
    }
  ];

  eventsHeadline = 'Events';
  eventsBrick: Brick[] = [
    {
      title: 'Entscheiden',
      text: `Unser System automatisiert Veranstaltungen im Hintergrund und schafft Zeit für das Wesentliche:
      Politik zu gestalten und Entscheidungen zu treffen!`
    },
    {
      title: 'Koordinieren',
      text: `Unser Managementsystem für Events erstellt eine automatisierte Timeline. Themen
      werden integriert (z.B. Wahlen, Ideen usw.), Debatten koordiniert.`
    },
    {
      title: 'Aktualisieren',
      text: `Protokolle, ToDo Listen und Antragsweiterleitung werden gestartet. Enscheidungen liegen in Real Time
      weltweit vor. Politik wird schneller und nachvollziehbarer.`
    }
  ];

  searchHeadline = 'Smart Search';
  searchBrick: Brick[] = [
    {
      title: 'Inkludieren',
      text: `Unser System schafft einen dezentralen Zugang zu allen Informationen über
      politische Ideen,
      Schwerpuntke von Politikern, Anträge, Events, Aufgaben und Gliederungen - zu jedem Zeitpunkt und jedem
      Ort dieser Welt!`
    },
    {
      title: 'Finden',
      text: `Damit Informationen einen Mehrwert liefern, müssen die richtigen Informationen zum richtigen Zeitpunkt
      greifbar sein. Dazu liefern wir ein intelligentes Suchsystem mit.`
    },
    {
      title: 'Nutzen',
      text: `State of the art searching ermöglicht bessere Entscheidungen und einen Wissensvorsprung für bessere
      Kampagnen und bessere Wahlkämpfe.`
    }
  ];

  communicationHeadline = 'Kommunikation';
  communicationBrick: Brick[] = [
    {
      title: 'Chatten',
      text: `Moderne Chats ermöglichen moderne Kommunikation. Plattformübergreifende
      Integration ermöglicht die Integration klassischer Emailkommunikation.`
    },
    {
      title: 'Einbinden',
      text: `Unsere Streams binden alle Mitglieder in Diskussionen ein - unabhänig davon, ob sie Kinder ins Bett
      bringen oder Nachtschicht haben. Streams bilden das Herzstück unser internen Kommunikation. Perspektivisch können
      Verhinderte über Videochats zu Veranstaltungen dazukommen.`
    },
    {
      title: 'Erneuern',
      text: `Moderne Kommunikationstools ermöglichen moderne Arbeitsweisen und damit die Einbindung junger und neuer
      Mitglieder!`
    }
  ];

  dataHeadline = 'Daten & Inklusion';
  dataBrick: Brick[] = [
    {
      title: 'Vertraulich',
      text: `Die App benötigt nur Informationen, die bereits bekannt sind: Wo du wohnst, wo du politisch aktiv bist
      und welche Themen dich interessieren! Es werden keine zusätzlichen Informationen erhoben oder ausgewertet.`
    },
    {
      title: 'Global & barrierefrei',
      text: `Unser Netzwerk ist mehrsprachig, lässt sich vom Browser vorlesen und ist somit
      global und barrierefrei zugänglich.`
    },
    {
      title: 'Universal',
      text: `Die App selbst ist als Progressive Web App plattformunabhängig im Browser als auch in App-Stores z.B. im
      Google Playstore verfügbar. Damit sind alle Funktionen unabhängig von der technischen Ausstattung.`
    }
  ];

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();

  }

}