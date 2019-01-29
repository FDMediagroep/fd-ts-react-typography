import H1, {H1Style} from './H1';
import H2, {H2Style} from './H2';
import H3, {H3Style} from './H3';
import P, {PStyle} from './P';
import { createGlobalStyle } from 'styled-components';

export {H1, H1Style};
export {H2, H2Style};
export {H3, H3Style};
export {P, PStyle};
export const AllTypographyStyle = createGlobalStyle`
${(H1Style as any).globalStyle.rules}
${(H2Style as any).globalStyle.rules}
${(H3Style as any).globalStyle.rules}
${(PStyle as any).globalStyle.rules}
`;
