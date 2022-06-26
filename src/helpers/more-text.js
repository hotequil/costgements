import { uniqueId } from "./unique-id";

export const toggleMoreText = ({ show, alreadySet, element, elementId }, set, ms = 200) => {
  if(alreadySet) return;

  setTimeout(() => {
    if(alreadySet) return;
    if(!element) element = document.getElementById(elementId);

    if(element){
      alreadySet = true;
      show = element.offsetHeight !== element.scrollHeight;
    }

    set({ show, alreadySet, element, elementId });
  }, ms);
}

export const generateMoreTextConfig = () => ({ show: false, alreadySet: false, element: null, elementId: uniqueId() });
