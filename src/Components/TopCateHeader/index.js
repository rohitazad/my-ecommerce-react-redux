import React, { useEffect, useState } from "react";
import './TopCateHeader.scss';
import { useSelector , useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { getAllCategories, fetchAsyncCategories } from '../../Store/categorySlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBarComponents from '../SearchBar';
import { BsList } from "react-icons/bs";
const TopCateHeaderComponents = ()=>{
    const categories = useSelector(getAllCategories);
    const dispatch = useDispatch();
    const [activeClass, setActiveClass] = useState(false);
    useEffect(()=>{
        dispatch(fetchAsyncCategories());
        // eslint-disable-next-line
    },[])
    const cagegoriesGenHtml = ()=>{
        return categories && categories.length > 0 ? categories.map((cat)=>{
            return (
                <li key={cat}>
                    <Link onClick={()=>{
                            setActiveClass(!activeClass)
                        }} to={`/products/${cat}`}>{cat}</Link>
                </li>
            )
        }) : ''
    }
    return (
        <>
            {
                categories && categories.length > 0 ? <div className="header-nav-inner"><Container><Row><Col>
                    <div className="box-header-nav">
                        <h4 onClick={()=>{
                            setActiveClass(!activeClass)
                        }} className="title_vertical_menu"> 
                            <span className="leftIcon"><BsList/></span>
                            <span className="title">Shop By Categories</span> 
                        </h4>
                        <ul className={activeClass ? 'active':''}>
                            {cagegoriesGenHtml()}
                        </ul>
                    </div><SearchBarComponents /></Col></Row></Container>
                </div> : ''
            } 
        </>
    )
}
export default TopCateHeaderComponents;