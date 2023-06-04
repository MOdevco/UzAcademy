import { arab, bio, desing, fizika, hamshira, kimyo, kom, korea, matem, rus, tarix, tur, usa, uzb, web , it, kids, mental, max } from '@/assets'
import { Box  , Heading} from '@chakra-ui/react'
import CardsLessons from '../cardsLessons/cardsLessons'

const Sciences = () => {
  return (
    <Box pt={100} display={'flex'} flexDirection={'column'} gap={{base: '20px' , lg: 10}}>
        <Box>
            <Heading color={'black'} textAlign={'center'}>
                Bizda mavjuda fanlar va kurslar
            </Heading>
        </Box>

      <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-between'} alignItems={'center'}>
        <CardsLessons image={usa} title={'Inglis Tili Sifatli Juda qisqa mudatda '} text={` Juda Malakali va tajribali ustozlar bilan birgalikda jahon tiliga aylanib borayotgan tilni o'zlashtiring sizga IELTS dan 7 va 8 natijaga ega ustozlar o'rgatadi.`} />

        <CardsLessons image={uzb} title={'Ona tili va Adabiyot'} text={` Malumot hozircha yetarli emas ... `} />

        <CardsLessons image={rus} title={"Rus tili bo'yicha malakani ustozlar"} text={"Sizlarni o'qitishga tayyor holda kutayotgan o'qituvchilar bilan birga rus tilini o'rganing."} />

      </Box>

      <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-between'} alignItems={'center'}>
        <CardsLessons image={korea} title={'Koreys tilidan malakali ustoz '} text={`Salkam koreysga aylangan ustozda o'qishni hohlovchilar uchun biz sizga Azizbek ni taklif qilamiz 5 TOPIK ga ega ustoz bilan kirga o'rganing.`} />

        <CardsLessons image={arab} title={"Arab tilini o'rganing"} text={"Sizlarni barcha Arab tili bo'yicha Ko'p yillik tajribaga ega bo'lgan ustoz bilan birga qo'yamiz bu siz uchun katta yutuq bo'ladi {Barcha hujat va Sertifikatlar mavjud} "} />

        <CardsLessons image={tur} title={'Turk tilidan tajribalik ustoz'} text={` Malumot hozircha yetarli emas ... `} />

      </Box>

      <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-between'} alignItems={'center'}>
        <CardsLessons image={tarix} title={"Univerisitetga mukammal tayorlov"} text={`Jaxon va O'zbekiston tarixi bo'yicha mukammal tayorlanish hohlasangiz bu kurs siz uchun , hoziroq qabulga yoziling.`} />

        <CardsLessons image={fizika} title={'Fizika qonunlari biz bilan'} text={`  Malumot hozircha yetarli emas ...`} />

        <CardsLessons image={matem} title={"Huddi Kalkulyatordek😲"} text={`Univerisitet uchun majburiy blog ga tayorlov ko'p tajribaga ega ustoz bilan bizda boshlang , juda mukammal tayorlov`} />

      </Box>

      <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-between'} alignItems={'center'}>

        <CardsLessons image={kimyo} title={'Kimyogarlar uchun yangilik'} text={`Endilikda siz bizning o'quv markazda judaham sifatli va tez kimyo fanini o'zlashtirasz , unung uchun kursga yoziling😂`} />

        <CardsLessons image={bio} title={'Biyalogiya qisqa mudatda '} text={` Bizda tajribalik ustoz bo'lganligi sababli juda qisqa mudatda bialogiyani o'rganib olasz ishonavering va harakat qiling!`} />

        <CardsLessons image={hamshira} title={' Hamshiralik sari biz bilan '} text={` Bizning tajribalik va ancha yildan beri halqimizga yordami tegayotdan inson bilan birga hamshiralikni o'zlashtiring. `} />

      </Box>
      
      <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-between'} alignItems={'center'}>
        <CardsLessons image={web} title={'Web olamiga sayohat'} text={` Dunyoning ishi bo'lib borayotgan IT sohasini biz bilan boshlang juda tez mudatda o'rganinb olishingiz va biz bilan ishlashingiz mumkun bo'ladi bizda komanda bilan ishlaysiz {MOdevco} `} />

        <CardsLessons image={desing} title={'Web olamida dizayn'} text={` Web tarmoqlarni ko'rinish holatini tayyorlash uchun bizning kursimizga yozilishingiz mumkun bo'ladi uning uchun pastgagi tugmani bosing 😁 {KNCoder} `} />

        <CardsLessons image={kom} title={'Bugalteriya va Biznes'} text={` Bizda office dasturlarini o'rganing va mukammal darajada ishingini ustasi bo'ling. `} />

      </Box>
      
      <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-between'} alignItems={'center'}>
        <CardsLessons image={it} title={"IT sohasini IT english bilan o'rganing "} text={` Malumot hozircha yetarli emas ... `} />

        <CardsLessons image={kids} title={"Bolalga befarq bo'lmang "} text={` Hozirdan boshlab bolangizga befarq bo'lmang chunki bolangizni kelajagi siz uchun muhim ahamyatga ega bo'ladi.`} />

        <CardsLessons image={mental} title={'Mega holatda miyangiz uhchun😲'} text={`Mental arifmetikani o'rganing bizda juda ko'p yilardan beri tajriba o'rtirib kelayotgan ustoz bilan birga boshlang.`} />

      </Box>

      <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-between'} alignItems={'center'}>
        <CardsLessons image={max} title={' Uyingiz uchun loihalar  '} text={` 3D max yo'nalishi  uchun ko'plab loihalarda qatnashing va biz bilan birga bo'ling. `} />

      </Box>


    </Box>
  )
}

export default Sciences