import styled from "styled-components";
import { allCat } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
  ${mobile({ padding: "0px", gap: "10px" })}
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-size: 14px;
  text-align: center;
`;

const AllCategories = () => {
  return (
    <Container>
      {allCat.map((item) => (
        <CategoryItem key={item.id}>
          <Icon src={item.img} alt={item.title} />
          <Title>{item.title}</Title>
        </CategoryItem>
      ))}
    </Container>
  );
};

export default AllCategories;
