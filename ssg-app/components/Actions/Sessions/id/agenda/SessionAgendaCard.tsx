import React from 'react';

interface Props {
  number: number | undefined;
  item: string;
}

const formatNumber = (num: number | undefined): string => {
  if (num === undefined || num < 0) return '';
  if (num < 10) return `0${Math.abs(num)}`;
  return num.toString();
};

function SessionAgendaCard({ number, item }: Props) {
  return (
    <div className="flex gap-8 px-8 py-2 w-full rounded-3xl bg-near-white shadow-3xl shadow-lxl shadow-dark-neutral/10">
      <span className="font-serif text-3xl text-left font-bold py-2">
        {formatNumber(number)}
      </span>
      <span className="py-2">{item}</span>
    </div>
  );
}

export default SessionAgendaCard;