interface CellDayObjectProps {
    date: number;
    month: number;
    year: number;
    isSelectedMonth: boolean;
}

interface DateCellButtonProps {
    onClick: () => void;
    cellDayObject: CellDayObjectProps;
    selectedDate: Date;
}
