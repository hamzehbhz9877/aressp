import AngleLeft from "@/assets/images/arrow-left.svg"
import AngleRight from "@/assets/images/arrow-right.svg"
import Image from "next/image";
import "./pagination.scss"

export type PaginationProps = {
    pages: Array<any>;
    goTo: (page: number) => void;
    currentPage: number;
    nextPage: () => void;
    prevPage: () => void;
    total: number;
}

const Pagination = ({
                        pages,
                        goTo,
                        currentPage,
                        nextPage,
                        prevPage,
                        total,
                    }: PaginationProps) => {

    const rows = pages.map((item, index) => (
        <li
            key={index}
            id={index.toString()}
            className={`pagination__item ${
                currentPage === item ? "pagination__item--active" : ""
            }`}
            onClick={() =>
                item.toString() === "..."
                    ? goTo(currentPage + 1)
                    : item.toString() === "... "
                        ? goTo(currentPage - 1)
                        : item.toString() === " ..."
                            ? goTo(currentPage + 1)
                            : goTo(item)
            }
        >
            <span className="pagination__link">{item}</span>
        </li>
    ));

    return (
        <nav className="pagination">
            <div className={`prev ${currentPage === 1 ? "disabled" : ""}`}
                 onClick={currentPage === 1 ? () => {
                 } : prevPage}>
                <Image src={AngleLeft} alt={"angleLeft"} width={20} height={20}/>
                <span>Previous</span>
            </div>
            <ul className="pagination__list">
                {rows}
            </ul>
            <div className={`next ${currentPage === total ? "disabled" : ""}`}
                 onClick={currentPage === total ? () => {
                 } : nextPage}>
                <span>Next</span>
                <Image src={AngleRight}
                       alt={"angleLeft"} width={20}
                       height={20}/>
            </div>
        </nav>
    );

};
export default Pagination;