import * as React from 'react';

export interface MeuComponenteProps {
  titulo: string;
  descricao?: string;
  className: string;
}

declare const MeuComponente: React.FC<MeuComponenteProps>;

export default MeuComponente;
