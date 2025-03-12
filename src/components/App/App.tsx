import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Faker } from "@faker-js/faker";
import { title } from "process";

const StyledButton = styled(Button)' 
background: red;
';

export const App = () => {
 return ( 
 <div>
    <StyledButton>Click me!</StyledButton>
 </div>
 );
};

type Movie = {
    id: number;
    name: string;
    image: string;
    description: string;
    release: string;
    duration: string;
    genres: number[];
    actors: Actor[];
};

// prettier-ignore
const mockPreviews = new Array(30)
.fill(undefined)
.map((_, index): Preview => ({
    actors: Faker.datatype.number({ min: 1, max: 12 }),
    id: index +1,
    image: Faker.image.urlPicsumPhotos(),
    release: Faker.date.past().toString(),
    title: Faker.datatype.boolean() ? Faker.lorem.words(4) : Faker.lorem.words(11),

}));
{
export const App = () => {
    return (
        <div>
    <StyledButton>{Faker.commerce.productName()}</StyledButton>
 </div>
 );
}};
