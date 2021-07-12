import { format, formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export const FormatDateToHumans = (
  date: string,
  type: "dd/MM/yyyy" | "dd MMMM yyyy" = "dd/MM/yyyy",
) => (date ? format(new Date(date), type, { locale: ptBR }) : "");

export const FormatDateDistanceToHumans = (firstDate: string, secondDate: Date) =>
  formatDistance(new Date(firstDate), secondDate, { addSuffix: true, locale: ptBR });
