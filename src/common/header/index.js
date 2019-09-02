import  React from 'react';
import { connect } from 'react-redux';
import  CssTransition from 'react-transition-group/CSSTransition';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SeachWrapper
 } from './style';

const Header = (props) => {

    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载app</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>

          <SeachWrapper>
            <CssTransition
              in={props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={props.focused ? 'focused': ''}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              ></NavSearch>
            </CssTransition>
            <i className={props.focused ? 'focused iconfont': 'iconfont'}>&#58890;</i>
          </SeachWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
              <i className="iconfont">&#58916;</i>
              写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )

}

const mapStateToProps = (state)=>{
  return {
    focused:state.focused
  }
}
const mapDispathToProps = (dispatch) =>{
  return {
      handleInputFocus(){
        const action = {
          type:'search_focus'
        };
        dispatch(action);
      },
      handleInputBlur(){
        const action = {
          type:'search_blur'
        };
        dispatch(action);
      }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);
