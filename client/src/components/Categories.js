import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
  width: 100%;
`;

const Categories = () => {
  return (
    <Container id="categories-section">
      <SectionContainer>
        <SectionTitle>Popular Products</SectionTitle>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </SectionContainer>
    </Container>
  );
};

export default Categories;
