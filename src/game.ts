import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script2 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15, 2, 10.176342964172363),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883503437042236, 4.795694828033447, 1.0005861520767212)
})
nftPictureFrame2.addComponentOrReplace(transform3)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(15, 2, 6.657499313354492),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883510589599609, 4.795694828033447, 1.0005863904953003)
})
nftPictureFrame9.addComponentOrReplace(transform4)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(11.513779640197754, 2, 0.5000002980232239),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883506774902344, 4.795694828033447, 1.0005881786346436)
})
nftPictureFrame10.addComponentOrReplace(transform5)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(0.49720463156700134, 2, 3.038335084915161),
  rotation: new Quaternion(-7.652456693289116e-16, -0.6958175301551819, 8.29479205322059e-8, -0.7182188034057617),
  scale: new Vector3(4.883510589599609, 4.795694828033447, 1.0005884170532227)
})
nftPictureFrame.addComponentOrReplace(transform6)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(0.49720463156700134, 2, 6.675734519958496),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883516788482666, 4.795694828033447, 1.0005888938903809)
})
nftPictureFrame3.addComponentOrReplace(transform7)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15, 6.5, 7),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883539199829102, 4.795694828033447, 1.000588059425354)
})
nftPictureFrame14.addComponentOrReplace(transform8)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(0.4972047805786133, 6.5, 3.038334846496582),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883517742156982, 4.795694828033447, 1.0005888938903809)
})
nftPictureFrame18.addComponentOrReplace(transform9)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(0.4972047805786133, 6.5, 6.675734519958496),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883522987365723, 4.795694828033447, 1.000589370727539)
})
nftPictureFrame19.addComponentOrReplace(transform10)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(15, 11.181482315063477, 10.176342964172363),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883528232574463, 4.795694828033447, 1.0005868673324585)
})
nftPictureFrame21.addComponentOrReplace(transform11)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(15, 11.181482315063477, 6.657499313354492),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.8835344314575195, 4.795694828033447, 1.0005871057510376)
})
nftPictureFrame22.addComponentOrReplace(transform12)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(11.513779640197754, 11.181482315063477, 0.5),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.8835248947143555, 4.795694828033447, 1.0005927085876465)
})
nftPictureFrame23.addComponentOrReplace(transform13)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(3.5357394218444824, 11.181482315063477, 0.5000009536743164),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.8835225105285645, 4.795694828033447, 1.0005921125411987)
})
nftPictureFrame25.addComponentOrReplace(transform14)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(15, 16, 10.176342964172363),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883515357971191, 4.795694828033447, 1.0005871057510376)
})
nftPictureFrame29.addComponentOrReplace(transform15)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(15, 16, 6.657499313354492),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883521556854248, 4.795694828033447, 1.0005873441696167)
})
nftPictureFrame30.addComponentOrReplace(transform16)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(11.513779640197754, 16, 0.5000000596046448),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883517742156982, 4.795694828033447, 1.0005909204483032)
})
nftPictureFrame31.addComponentOrReplace(transform17)

const nftPictureFrame34 = new Entity('nftPictureFrame34')
engine.addEntity(nftPictureFrame34)
nftPictureFrame34.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 3.038334846496582),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883523464202881, 4.795694828033447, 1.000589370727539)
})
nftPictureFrame34.addComponentOrReplace(transform18)

const nftPictureFrame36 = new Entity('nftPictureFrame36')
engine.addEntity(nftPictureFrame36)
nftPictureFrame36.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 10.198812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883525371551514, 4.795694828033447, 1.0005900859832764)
})
nftPictureFrame36.addComponentOrReplace(transform19)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(0.4972047805786133, 6.5, 13.698812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.052089214324951, 4.239438533782959, 1.0004199743270874)
})
nftPictureFrame4.addComponentOrReplace(transform20)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 13.698812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.88352632522583, 4.795694828033447, 1.0005903244018555)
})
nftPictureFrame7.addComponentOrReplace(transform21)

const nftPictureFrame37 = new Entity('nftPictureFrame37')
engine.addEntity(nftPictureFrame37)
nftPictureFrame37.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(15, 6.5, 3.292409896850586),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(6.179809093475342, 4.84365177154541, 1.0009907484054565)
})
nftPictureFrame37.addComponentOrReplace(transform22)

const nftPictureFrame38 = new Entity('nftPictureFrame38')
engine.addEntity(nftPictureFrame38)
nftPictureFrame38.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(15, 11.181482315063477, 3.5),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883525848388672, 4.795694828033447, 1.0005873441696167)
})
nftPictureFrame38.addComponentOrReplace(transform23)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(3.37274169921875, 2.238152503967285, 0.46334952116012573),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL3.addComponentOrReplace(transform24)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(0.37274169921875, 2.0854711532592773, 10.463349342346191),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.4898502826690674, 2.5600461959838867, 1.0000042915344238)
})
imageFromURL4.addComponentOrReplace(transform25)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(0.37274158000946045, 6.704496383666992, 10.463349342346191),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000061988830566, 2, 1.0000030994415283)
})
imageFromURL5.addComponentOrReplace(transform26)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(3.37274169921875, 6.788402557373047, 0.46334952116012573),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL6.addComponentOrReplace(transform27)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(11.559871673583984, 6.788402557373047, 0.46334850788116455),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL7.addComponentOrReplace(transform28)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(15, 6.738152503967285, 10.65749740600586),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000004768371582, 2, 1.000002384185791)
})
imageFromURL8.addComponentOrReplace(transform29)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(15, 11.481697082519531, 13.57827377319336),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000052452087402, 2, 1.0000026226043701)
})
imageFromURL9.addComponentOrReplace(transform30)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(7.672002792358398, 11.390192985534668, 0.4633488357067108),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL10.addComponentOrReplace(transform31)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(0.37274158000946045, 11.436701774597168, 2.9643125534057617),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000007152557373, 2, 1.0000035762786865)
})
imageFromURL11.addComponentOrReplace(transform32)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(0.37274158000946045, 11.436701774597168, 6.690377235412598),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000076293945312, 2, 1.0000038146972656)
})
imageFromURL12.addComponentOrReplace(transform33)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(0.37274158000946045, 11.436701774597168, 10.230411529541016),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000081062316895, 2, 1.0000040531158447)
})
imageFromURL13.addComponentOrReplace(transform34)

const imageFromURL14 = new Entity('imageFromURL14')
engine.addEntity(imageFromURL14)
imageFromURL14.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(7.596166610717773, 6.788402557373047, 0.4633491039276123),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL14.addComponentOrReplace(transform35)

const imageFromURL15 = new Entity('imageFromURL15')
engine.addEntity(imageFromURL15)
imageFromURL15.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(7.672002792358398, 16.188060760498047, 0.4633488357067108),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL15.addComponentOrReplace(transform36)

const imageFromURL17 = new Entity('imageFromURL17')
engine.addEntity(imageFromURL17)
imageFromURL17.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(6.1481475830078125, 0.7381525039672852, 16),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.76286244392395, 4.736288547515869, 1.0000017881393433)
})
imageFromURL17.addComponentOrReplace(transform37)

const imageFromURL18 = new Entity('imageFromURL18')
engine.addEntity(imageFromURL18)
imageFromURL18.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(7.511935234069824, 11.508377075195312, 15.88036823272705),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(4.810523509979248, 4.503478050231934, 1.0000020265579224)
})
imageFromURL18.addComponentOrReplace(transform38)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(15, 16.23815155029297, 3),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000057220458984, 2, 1.0000028610229492)
})
imageFromURL.addComponentOrReplace(transform39)

const imageFromURL19 = new Entity('imageFromURL19')
engine.addEntity(imageFromURL19)
imageFromURL19.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(0.37274169921875, 16.129657745361328, 6.690377235412598),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000013828277588, 2, 1.000004529953003)
})
imageFromURL19.addComponentOrReplace(transform40)

const imageFromURL20 = new Entity('imageFromURL20')
engine.addEntity(imageFromURL20)
imageFromURL20.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(3.37274169921875, 16.23815155029297, 0.46334952116012573),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL20.addComponentOrReplace(transform41)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(7.37274169921875, 2.238152503967285, 0.46334904432296753),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL2.addComponentOrReplace(transform42)

const imageFromURL16 = new Entity('imageFromURL16')
engine.addEntity(imageFromURL16)
imageFromURL16.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(15, 2.238152503967285, 2.6574974060058594),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.0000104904174805, 2, 1.0000033378601074)
})
imageFromURL16.addComponentOrReplace(transform43)

const imageFromURL21 = new Entity('imageFromURL21')
engine.addEntity(imageFromURL21)
imageFromURL21.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(2.6481475830078125, 0.7381525039672852, 16),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.76286244392395, 4.736288547515869, 1.0000017881393433)
})
imageFromURL21.addComponentOrReplace(transform44)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(nftPictureFrame2, {"id":"57016492949346244412318091525152772733857084058438368550656483897609535094785","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script1.spawn(nftPictureFrame9, {"id":"91775122611968397795785102665212827355884328935651412391559266268789455454210","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script1.spawn(nftPictureFrame10, {"id":"104960635844694975928166925720134984087297734148077397095299713070400939229185","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script1.spawn(nftPictureFrame, {"id":"24028889962398858120738891929891958707240541426386829951453028722826167713793","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script1.spawn(nftPictureFrame3, {"id":"49008867805361394417369651591100478532115717864533747943409587068963680944129","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script1.spawn(nftPictureFrame14, {"id":"60344444403223627122778286449731274474994233175942963081247885191179071913985","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script1.spawn(nftPictureFrame18, {"id":"10","contract":"0x9dde0faeb3C65F10235368C306Ea69C5A12C5389","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script1.spawn(nftPictureFrame19, {"id":"89298767884179388121451104625893873323450188557692826764861271730279044612097","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script1.spawn(nftPictureFrame21, {"id":"23878231564945300147273253307773123765173185161729653271353539358140156346369","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script1.spawn(nftPictureFrame22, {"id":"76826482476497723492110405183231084016312237318425504030459482296391049412609","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script1.spawn(nftPictureFrame23, {"id":"23598640004675359258105417215632015366259445919884004525440556016335822258177","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script1.spawn(nftPictureFrame25, {"id":"66019243335575435805648968342699057461333706652430184610592712831495995129857","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script1.spawn(nftPictureFrame29, {"id":"87383727123620161737292094198014250315741856288672271608440919226978763014145","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script1.spawn(nftPictureFrame30, {"id":"107744758951793222891694679140073264283825366813155610411133071168751699755009","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script1.spawn(nftPictureFrame31, {"id":"108823061438446436103492439531954048139962756353325598838884223172652652560385","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script1.spawn(nftPictureFrame34, {"id":"1","contract":"0x15bb8e831849814f436e0e567a75b6241b58cca8","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame34, channelBus))
script1.spawn(nftPictureFrame36, {"id":"31190410736820857861971679885765504516643478652592167724720956941030521831425","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame36, channelBus))
script1.spawn(nftPictureFrame4, {"id":"92109847624454127267944115392954259895351342385729911412016170274959468265473","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script1.spawn(nftPictureFrame7, {"id":"77431385646842552493080614307515790372075511703531388549962954608251211087873","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script1.spawn(nftPictureFrame37, {"id":"47645712648972370678343403322775412294473570390050796767601611624158926471169","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame37, channelBus))
script1.spawn(nftPictureFrame38, {"id":"24483662975056007746239962287761898336830274845796928222504430040047868182529","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame38, channelBus))
script2.spawn(imageFromURL3, {"image":"https://i.ibb.co/BcYxmSK/temp-Image-R7-Ww-Un.jpg"}, createChannel(channelId, imageFromURL3, channelBus))
script2.spawn(imageFromURL4, {"image":"https://i.ibb.co/yFT2WW9/image.png"}, createChannel(channelId, imageFromURL4, channelBus))
script2.spawn(imageFromURL5, {"image":"https://i.ibb.co/JBMDpTs/image.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script2.spawn(imageFromURL6, {"image":"https://i.ibb.co/8djM5GY/Convallaria-FND.png"}, createChannel(channelId, imageFromURL6, channelBus))
script2.spawn(imageFromURL7, {"image":"https://i.ibb.co/6wBncp1/unnamed-2-11-12-23.png"}, createChannel(channelId, imageFromURL7, channelBus))
script2.spawn(imageFromURL8, {"image":"https://i.ibb.co/hDjk8sq/image.png"}, createChannel(channelId, imageFromURL8, channelBus))
script2.spawn(imageFromURL9, {"image":"https://i.ibb.co/x2Gr2DZ/CYMK.png"}, createChannel(channelId, imageFromURL9, channelBus))
script2.spawn(imageFromURL10, {"image":"https://i.ibb.co/wdbmq0d/gray-cat-pug.jpg"}, createChannel(channelId, imageFromURL10, channelBus))
script2.spawn(imageFromURL11, {"image":"https://i.ibb.co/YNbHsN6/temp-Imagees377w.jpg"}, createChannel(channelId, imageFromURL11, channelBus))
script2.spawn(imageFromURL12, {"image":"https://i.ibb.co/nnrDrtt/image.png"}, createChannel(channelId, imageFromURL12, channelBus))
script2.spawn(imageFromURL13, {"image":"https://i.ibb.co/0CQmDT8/image.png"}, createChannel(channelId, imageFromURL13, channelBus))
script2.spawn(imageFromURL14, {"image":"https://i.ibb.co/KVzx6XZ/52096-A47-C2-DC-4-B57-9318-BCC27-CB777-E0.png"}, createChannel(channelId, imageFromURL14, channelBus))
script2.spawn(imageFromURL15, {"image":"https://i.ibb.co/xGDF3wZ/35.png"}, createChannel(channelId, imageFromURL15, channelBus))
script2.spawn(imageFromURL17, {"image":"https://i.ibb.co/z52Wfnp/5-28-29.png"}, createChannel(channelId, imageFromURL17, channelBus))
script2.spawn(imageFromURL18, {"image":"https://i.ibb.co/CMhDHFx/logo.png"}, createChannel(channelId, imageFromURL18, channelBus))
script2.spawn(imageFromURL, {"image":"https://i.ibb.co/4mJJcrw/edb22b0e174c8c0ebf4e816e5a11116c-dat.png"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(imageFromURL19, {"image":"https://i.ibb.co/FWyXdPs/temp-Imagerab-EEM.jpg"}, createChannel(channelId, imageFromURL19, channelBus))
script2.spawn(imageFromURL20, {"image":"https://i.ibb.co/VNBqFKx/Genesis-Goro.png"}, createChannel(channelId, imageFromURL20, channelBus))
script2.spawn(imageFromURL2, {"image":"https://i.ibb.co/hKb7f0f/image.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script2.spawn(imageFromURL16, {"image":"https://i.ibb.co/hDgDb50/CMYK.png"}, createChannel(channelId, imageFromURL16, channelBus))
script2.spawn(imageFromURL21, {"image":"https://i.ibb.co/9qZdRmH/koko.jpg"}, createChannel(channelId, imageFromURL21, channelBus))