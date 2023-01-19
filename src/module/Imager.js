import React  from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { genderSet, spriteSet } from '../store/user.js';

import bg from '../img/imager/bg.png';
import button from '../img/imager/button.png';
import button_a from '../img/imager/button_a.png';
import arrow_l from '../img/imager/arrow_l.png';
import arrow_r from '../img/imager/arrow_r.png';
import arrow_l_a from '../img/imager/arrow_l_a.png';
import arrow_r_a from '../img/imager/arrow_r_a.png';
import window from '../img/imager/window.png';

const ImagerCore = styled.div`
  background-image: url(${bg});
  width: 281px;
  height: 236px;

  margin: 0 auto;
  position: relative;
  margin-right: 15px;
  margin-top: 15px;
`

const GenderWrap = styled.div`
  width: 67px;
  height: 24px;
  position: relative;
  margin: 0 auto;
`

const Girl = styled.div`
  width: 14px;
  height: 24px;
  display: inline-block;
`

const Boy = styled.div`
  width: 14px;
  height: 24px;
  float: right;
`

const GenderLabel = styled.div`
  font-family: Volter;
  font-size: 9px;
  position: absolute;
`

const GenderButton = styled.button`
  background-image: url(${button});
  width: 12px;
  height: 12px;
  border: 0;
  bottom: 0;
  position: absolute;

  ${props => (props.checked) && css`
        background-image: url(${button_a});
        width: 12px;
        height: 12px;`
  };

`

const ColumnLeft = styled.div`
  width: 85px;
  height: 213px;
  float: left;
  margin-left: 11px;
`

const ColumnRight = styled.div`
  width: 85px;
  height: 213px;
  float: right;
  margin-right: 6px;
`

const SelectorWrap = styled.div`
  width: 85px;
  height: 43px;
  position: relative;
`

const ArrowLeft = styled.div`
  background-image: url(${arrow_l});
  width: 25px;
  height: 29px;
  position: absolute;
  top: 50%;
  transform: translate(0, -55%);

  :active {
    background-image: url(${arrow_l_a});
  }
`

const ArrowRight = styled.div`
  background-image: url(${arrow_r});
  width: 25px;
  height: 29px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -55%);

  :active {
    background-image: url(${arrow_r_a});
  }
`

const Window = styled.div`
  background-image: url(${window});
  width: 43px;
  height: 41px;
  margin: 0 auto;
`

const ModelRender = styled.div`
  width: 93px;
  height: 235px;
  display: inline-block;
  margin: 0 auto;
  margin-top: -20px;
  margin-left: -15px;
`

function Imager() {
  const dispatch = useDispatch();
  const { gender, genderSelected, genderSprites } = useSelector((state) => state.user);
  const { ha, hr, hd, ch, lg, sh } = useSelector((state) => state.user.spriteIndexes);

  const backSprite = (s) => {
    dispatch(spriteSet(["back", s]));
  }

  const nextSprite = (s) => {
    dispatch(spriteSet(["next", s]));
  }

  return (
    <>
      <ImagerCore>
        <GenderWrap>
          <Girl>
            <GenderLabel>Girl</GenderLabel>
            <GenderButton checked={!genderSelected} onClick={() => {dispatch(genderSet("f"))}}/>
          </Girl>
          <Boy>
            <GenderLabel>Boy</GenderLabel>
            <GenderButton checked={genderSelected} onClick={() => {dispatch(genderSet("m"))}}/>
          </Boy>
        </GenderWrap>

        <ColumnLeft>
          <SelectorWrap>
            <ArrowLeft onClick={() => backSprite("hr")}/>
              <Window />
            <ArrowRight onClick={() => nextSprite("hr")}/>
          </SelectorWrap>
          <SelectorWrap>
            <ArrowLeft onClick={() => backSprite("hd")}/>
              <Window />
            <ArrowRight onClick={() => nextSprite("hd")}/>
          </SelectorWrap>
          <SelectorWrap>
            <ArrowLeft onClick={() => backSprite("ch")}/>
              <Window />
            <ArrowRight onClick={() => nextSprite("ch")}/>
          </SelectorWrap>
          <SelectorWrap>
            <ArrowLeft onClick={() => backSprite("lg")}/>
              <Window />
            <ArrowRight onClick={() => nextSprite("lg")}/>
          </SelectorWrap>
          <SelectorWrap>
            <ArrowLeft onClick={() => backSprite("sh")}/>
              <Window />
            <ArrowRight onClick={() => nextSprite("sh")}/>
          </SelectorWrap>
        </ColumnLeft>
        <ModelRender>
          <img src={
            "https://www.habbo.com/habbo-imaging/avatarimage?figure=hd-" 
              + genderSprites.hd[hd] + 
            "-1.ch-" 
              + genderSprites.ch[ch] + 
            "-66.lg-" 
              + genderSprites.lg[lg] + 
            "-81.sh-"
              + genderSprites.sh[sh] +
            "-80.hr-" 
              + genderSprites.hr[hr] + "-31&size=l&action=stand,&direction=4&head_direction=4.png"} />
        </ModelRender>
        <ColumnRight>
          <SelectorWrap>
              <ArrowLeft />
              <Window />
              <ArrowRight />
            </SelectorWrap>
            <SelectorWrap>
              <ArrowLeft />
              <Window />
              <ArrowRight />
            </SelectorWrap>
            <SelectorWrap>
              <ArrowLeft />
              <Window />
              <ArrowRight />
            </SelectorWrap>
            <SelectorWrap>
              <ArrowLeft />
              <Window />
              <ArrowRight />
            </SelectorWrap>
            <SelectorWrap>
              <ArrowLeft />
              <Window />
              <ArrowRight />
            </SelectorWrap>
        </ColumnRight>
      </ImagerCore>
    </>
  );
}

export default Imager;
