import { MOOD } from '@/constants/diary';
import { IoGrid } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import LinkToDiary from '@/pages/Mypage/LinkToDiary';
import * as S from './index.styles';

const FilterDiary = ({ isThumbnail, handleThumbnail, mood, page }) => {
  const showThumbnail = isThumbnail => () => {
    handleThumbnail(isThumbnail);
  };

  return (
    <S.Container>
      <section>
        <LinkToDiary mood={MOOD.BEST} page={0}>
          <S.Button
            type="button"
            className={mood === MOOD.BEST ? 'selected' : ''}
          >
            최상😁
          </S.Button>
        </LinkToDiary>
        <LinkToDiary mood={MOOD.GOOD} page={0}>
          <S.Button
            type="button"
            className={mood === MOOD.GOOD ? 'selected' : ''}
          >
            상😊
          </S.Button>
        </LinkToDiary>
        <LinkToDiary mood={MOOD.NORMAL} page={0}>
          <S.Button
            type="button"
            className={mood === MOOD.NORMAL ? 'selected' : ''}
          >
            중🙂
          </S.Button>
        </LinkToDiary>
        <LinkToDiary mood={MOOD.BAD} page={0}>
          <S.Button
            type="button"
            className={mood === MOOD.BAD ? 'selected' : ''}
          >
            하😑
          </S.Button>
        </LinkToDiary>
        <LinkToDiary mood={MOOD.WORST} page={0}>
          <S.Button
            type="button"
            className={mood === MOOD.WORST ? 'selected' : ''}
          >
            최하😩
          </S.Button>
        </LinkToDiary>
      </section>
      <S.WrapperDisplay>
        <button
          type="button"
          className={isThumbnail ? 'selected' : ''}
          onClick={showThumbnail(true)}
        >
          <IoGrid />
        </button>
        <button
          type="button"
          className={isThumbnail ? '' : 'selected'}
          onClick={showThumbnail(false)}
        >
          <FaList />
        </button>
      </S.WrapperDisplay>
    </S.Container>
  );
};

export default FilterDiary;
