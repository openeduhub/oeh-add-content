export class RequestData {
  url: string; // Previously `id`
  title: string; // Previously `name`
  discipline: string; // Fachgebiet
  intendedEndUserRole: string; // Zielgruppe
  educationalContext: string; // Bildungsumfeld
  learningResourceType: string; // Materialart (LOM)
  sourceContentType: string; // Art der Seite -- Für Quellen
  toolCategory: string; // Art des Tools -- Für Tools/Werkzeuge
  objectType: 'MATERIAL' | 'TOOL' | 'SOURCE' | 'LESSONPLANNING'; // Typ des Objekts
}
