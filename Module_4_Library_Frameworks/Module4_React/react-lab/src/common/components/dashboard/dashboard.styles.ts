import { css } from 'emotion';

export const root = css`
    display: flex;
    flex-direction: column;
`;

export const items = css`
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 4rem;
    @media (min-width: 800px) {
        grid-template-columnbs: repeat(3, 1fr);
    }
`;

export const icon = css`
    font-size: 5rem;
`;

export const item = css`
    padding: 2rem 0rem;
`;