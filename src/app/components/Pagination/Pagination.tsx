import * as P from "./Pagination.styles";
import { useCallback } from "react";

export interface PaginationProps {
  firstLabel?: string;
  lastLabel?: string;
  nextLabel?: string | React.ReactNode;
  previousLabel?: string | React.ReactNode;
  maxDisplayedPages?: number;
  currentPage: number;
  pageSize: number;
  totalElements: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  firstLabel = "<<",
  previousLabel = "<",
  nextLabel = ">",
  lastLabel = ">>",
  maxDisplayedPages = 5,
  currentPage = 1,
  pageSize,
  totalElements,
  ...props
}: PaginationProps) {
  const getTotalPages = useCallback((): number => {
    return Math.ceil(totalElements / pageSize);
  }, [pageSize, totalElements]);

  const getPaginationPages = (): number[] => {
    let start = 1;

    if (currentPage <= maxDisplayedPages - Math.trunc(maxDisplayedPages / 2)) {
      start = 1;
    } else if (
      currentPage <=
      getTotalPages() - Math.trunc(maxDisplayedPages / 2)
    ) {
      start = currentPage - Math.trunc(maxDisplayedPages / 2);
    } else {
      start = getTotalPages() - maxDisplayedPages + 1;
    }

    return new Array<number>(
      getTotalPages() < maxDisplayedPages ? getTotalPages() : maxDisplayedPages
    )
      .fill(0)
      .map((_, idx) => start + idx);
  };

  return (
    <P.Wrapper>
      <p>{`Exibindo ${pageSize * (currentPage - 1) + 1} - ${
        pageSize * currentPage > totalElements
          ? totalElements
          : pageSize * currentPage
      } de ${totalElements}`}</p>
      <P.PaginationWrapper>
        <P.PageButton
          label={firstLabel}
          disabled={getTotalPages() <= 1 || currentPage === 1}
          onClick={() => {
            props.onPageChange(1);
          }}
        />
        <P.PageButton
          label={previousLabel}
          disabled={getTotalPages() <= 1 || currentPage === 1}
          onClick={() => {
            props.onPageChange(currentPage - 1);
          }}
        />
        {getTotalPages() > 1 &&
          getPaginationPages().map((page) => (
            <P.PageButton
              key={page}
              label={page}
              disabled={page === currentPage}
              variant={page !== currentPage ? "primary" : "secondary"}
              onClick={() => {
                props.onPageChange(page);
              }}
            />
          ))}
        <P.PageButton
          label={nextLabel}
          disabled={getTotalPages() <= 1 || currentPage === getTotalPages()}
          onClick={() => {
            props.onPageChange(currentPage + 1);
          }}
        />
        <P.PageButton
          label={lastLabel}
          disabled={getTotalPages() <= 1 || currentPage === getTotalPages()}
          onClick={() => {
            props.onPageChange(getTotalPages());
          }}
        />
      </P.PaginationWrapper>
    </P.Wrapper>
  );
}
