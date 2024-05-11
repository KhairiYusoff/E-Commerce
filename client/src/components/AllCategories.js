import styled from "styled-components";
import { allCat } from "../data";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  ${mobile({ padding: "0px" })}
`;

const SectionContainer = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  ${mobile({ gap: "10px" })}
`;

const CategoryItemLink = styled(Link)`
  text-decoration: none;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
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
  color: #666;
`;

const AllCategories = () => {
  return (
    <Container>
      <SectionContainer>
        <SectionTitle>All Categories</SectionTitle>
        <Grid>
          {allCat.map((item) => (
            <CategoryItemLink to={`/products/${item.cat}`} key={item.id}>
              <CategoryItem>
                <Icon src={item.img} alt={item.title} />
                <Title>{item.title}</Title>
              </CategoryItem>
            </CategoryItemLink>
          ))}
        </Grid>
      </SectionContainer>
    </Container>
  );
};

export default AllCategories;
