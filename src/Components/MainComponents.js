import { Row,Col } from 'antd';
import React,{useEffect} from 'react';
import CardComponent  from './CardComponent'
import {connect} from 'react-redux';
import { Loading } from './LoadingComponent';
import {fetchPeople} from '../redux/actionCreater';


const mapStateToProps = state =>{
    return{
        isLoading:state.isLoading,
        people:state.people
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchPeople:()=>dispatch(fetchPeople())
    }
}
function MainComponents({isLoading,people,fetchPeople}) {


    useEffect(() => {
        fetchPeople();
    }, [])
    
    return (
        <div className='container-fluid'>
            {
            isLoading?
            <Loading />
            :
            <Row gutter={[16, 8]} style={{marginTop:15,margin:15}}>
                {people && people.map(person =>
                    <Col xs={24} sm={24} md={8} lg={8} xl={6}>
                        <CardComponent 
                        className='Card'
                        key = {person.key}
                        image={`https://avatars.dicebear.com/v2/avataaars/${person.username}.svg?options[mood][]=happy`}
                        name={person.name}  
                        email={person.email} 
                        phone={person.phone}
                        website={person.website} 
                        />
                    </Col>
                )}
            </Row>
            }   
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponents);