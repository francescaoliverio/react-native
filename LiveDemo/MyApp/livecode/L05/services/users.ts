export let notes: { id: string; text: string }[] = [];

export default function addNote(text: string) {
  notes = [{ id: String(Date.now()), text }, ...notes];
}