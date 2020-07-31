// x = wall, o = coin, ! = lava, h = horizontal, v = vertical

const level0 = [
    18,
    [
        '                                                                                                                                                  x',
        '                                                                                                                                                  x',
        '                                                                                                                                                  x',
        '                                                                                                                                                  x',
        '                                                                                                                                                  x',
        '                                                                                                                                                  x',
        '                                                                                                                                                  x',
        '                                                              o                                                                                   x',
        '                                                                                                                                                  x',
        '                                                              x     o              o                             o                                x',
        '                   o                                                                                                                              x',
        '                                                   o                x             xxx                            x                                x',
        '               xxxxxxxxxx                                                                          o                   o                          x',
        '                        x                                                 x      h           x      h    x                                        x',
        '                        x                                                 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       o     x                          x',
        ' xxxxxxxxxx             x     xxxxxx                                                                                                              x',
        '!!!!!!!!!!x             x     x                        xxxxx                                               o     x                                x',
        '!        !x             x!!!!!x                        x   xx                                                                                     x',
        '!        !!!!!!!        xxxxxxx                  xxxxxxx    xx                                       o     x                                      x',
        '!         xxxxxx   o                             x           xx                                                                                   x',
        '!    o                              xxxxxxxxxxxxxx            xx                               o     x                                            x',
        '!                                                              xx                                                                                 x',
        '!                                                               xx      o     o     o    o     x                                                  x',
        '!     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                      xx                                                                               x',
        '!                                                                       x     x     x    x                                                        x',
        '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ]
];

const level1 = [
    18,
    [
        'x                                                                                                                                                 x',
        'x                                                                                                                                                 x',
        'x                                                                                                                                                 x',
        'x                                       o                                                                                     o                   x',
        'x                                                                            o          o                                                        ox',
        'xxxxxxxxxxxxxxxxxxxxxxx                xxx         xxxxx                                                                      x                   x',
        'x!!!!!!!!!!!!!!!!!!!!!!                             xxxx                                                               x             xx           x',
        'x!!!!  ! !!!  !!!  v!!!                              xxx                                                               x             xxxxxx       x',
        'x!!!   !   !     !   !                                xx              xxx         xxx        xxx                      xx             xx           x',
        'x!                   !                                 xx                                                             xx             xxo          x',
        'x!                                                      xx                                                           xx              xx       xxxxx',
        'x!                                                       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xx               xx           x',
        'x!                                 o                      xxxxxxxxxxxxxxx!!!xxxxxxxxxx!!!xxxxxxxxxxxxx!!!xxxxx     xx                xxxxxx      ox',
        'x!           v                                                                                                    xx                 xx           x',
        'x! o       o     o     o                         o                        o            o               o         xx                  xxo          x',
        'x!                                                                                                              xx                   xx       xxxxx',
        'x!xxx     xxx   xxx   xxx    x   h      x       xxx       xxxxxxxxx!!!xxxxxxxxxx!!!xxxxxxxxxxx!!!xxxxxxxxxxxxxxxx                    xx           x',
        'x!!!                         xxxxxxxxxxxx                 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                      xx          ox',
        'x!!                                                                                                                                  xxxxxx       x',
        'x!                                                                                                                                                x',
        'x!       v                                                                                                                                        x',
        'x!                    !                                                                                                                       xxxxx',
        'x!         !          !                                                                     !                         !                           x',
        'x!     !  !!    !  !!!!!!  !       !    !      ! !     !  !              !!!                !!         !             !!      !                    x',
        'x!!  v!!!!!!!! !!!!!!!!!! !!!!! !  !! ! !!! !! ! !!!  !! !!    !!    !!!!!!!  !!  ! !  !! !!!!!!!!  !  !  !!  ! !!! !!!   !  !! !   !    !!  !  ! x',
        'x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ]
];

const levels = [level0, level1];
let levelNumber = 0;
