interface CellDayObjectProps {
    date: number;
    month: number;
    year: number;
    isSelectedMonth: boolean;
}

interface DateCellButtonProps {
    onClick: (arg0: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    cellDayObject: CellDayObjectProps;
    selectedDate: Date;
}
