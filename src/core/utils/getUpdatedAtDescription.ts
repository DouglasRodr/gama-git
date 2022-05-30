import { format, formatDistance, differenceInDays } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function getUpdatedAtDescription(updatedAtDate: Date) {
  const today = new Date();
  const dayDiff = differenceInDays(today, updatedAtDate);

  if (today.getFullYear() - updatedAtDate.getFullYear() > 0) {
    return (
      "Atualizado em " +
      format(updatedAtDate, "d 'de' MMM 'de' yyyy", {
        locale: ptBR,
      })
    );
  }

  if (dayDiff > 7) {
    return (
      "Atualizado em " +
      format(updatedAtDate, "d 'de' MMM", {
        locale: ptBR,
      })
    );
  }
  const distance = formatDistance(updatedAtDate, new Date(), {
    locale: ptBR,
  });

  return `Atualizado há ${distance}`;
}
