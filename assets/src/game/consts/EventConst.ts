var EventConst = {
        //返回标识
        REQUEST_SUCCESS : 0,

        //合成消息redUIType
        FLOATLAYER_REWARD : 1,                          //浮层奖励
        COMPLETE_REWARD : 2,                            //闯关红包
        GUEST_REWARD : 3,                               //新手红包
        BUFFER_REWARD : 4,                              //缓冲区间红包

        BUFFER_RWEARD_FAIL : 0,                         //缓冲区间红包金额为0

        TASK_CLAIMOVER : 1,                             //已经领取
        TASK_CANCLAIM : 2,                              //可领取   
        
        //动作状态
        ANIMAL_SPAWN : 0,                               //出生动作
        ANIMAL_COMPOSE : 1,                             //合成动作
        ANIMAL_BEREBORN :2,                             //重生动作
        //游戏视图状态
        VIEW_STATE_NORMAL : 0,                          //视图正常状态
        VIEW_STATE_COMPOSE : 1,                         //视图收集状态
};
export default EventConst;