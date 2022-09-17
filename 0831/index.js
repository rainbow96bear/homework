let play;
let level = 1;
let my_hp;
let max_hp;
let job = 0;
let get_money;
let money = 0;
let choice_act;
let act;
let enemy_level;
let enemy_hp;
let enemy_attak;
let boss_level;
let boss_hp;
let boss_attak;
let damage;
let exp = 0;
let get_exp;
let choice_potion;

play = prompt(`0을 제외한 값을 입력하여 게임 실행`);
if (play != 0) {
  play = 1;
} else {
  play = 0;
}
while (play) {
  // 직업 선택 시작
  while (job == 0) {
    job = prompt(`직업을 선택하세요.
1. 전사 : 느리지만 강한 방어력을 가졌다.
2. 궁수 : 빠른 연사력을 가졌다.
3. 마법사 : 체력은 낮지만 강한 마법 공격력을 가졌다.
4. 도적 : 다양한 함정을 이용하여 적을 혼란에 빠뜨린다.`);
    switch (job) {
      case "1":
      case "전사":
        alert(`전사를 선택하셨습니다.`);
        my_hp = level * 200;
        max_hp = my_hp;
        job = 1;
        break;
      case "2":
      case "궁수":
        alert(`궁수를 선택하셨습니다.`);
        my_hp = level * 150;
        max_hp = my_hp;
        job = 2;
        break;
      case "3":
      case "마법사":
        alert(`마법사를 선택하셨습니다.`);
        my_hp = 100 * level;
        max_hp = my_hp;
        job = 3;
        break;
      case "4":
      case "도적":
        alert(`도적을 선택하셨습니다.`);
        my_hp = level * 100;
        max_hp = my_hp;
        job = 4;
        break;
      default:
        alert(
          `잘못 입력하셨습니다. 전사, 궁수, 마법사, 도적 중에 선택해주세요.`
        );
        job = 0;
    }
  }
  //   직업 선택 끝

  // 전투하러 가기? 상태창 보기? 체력 회복하기? 게임 끝내기?
  do {
    choice_act = prompt(`무엇을 할까요?
      1. 전투하러 가기
      2. 상태보기
      3. 체력 회복하기
      4. 게임 끝내기`);
    switch (choice_act) {
      case "전투하러 가기":
      case "1":
        // 전투 시작
        //   던전 선택 시작
        do {
          dongeon_choice = prompt(`던전을 선택하세요.
1. 일반 던전 : 몬스터가 약하다

2. 보스 던전 : 강한 보스와 싸우지만 경험치를 많이 준다
   (※방어를 하여도 소량의 대미지가 들어온다.※)`);

          switch (dongeon_choice) {
            case "일반 던전":
            case "1":
              // 일반 던전 선택시 시작
              do {
                enemy_level = +prompt("일반 던전의 레벨을 선택하세요. (1~100)");
                if (!(enemy_level > 0 && enemy_level < 101)) {
                  alert(`일반 던전의 레벨 범위 1~100 사이에서 선택해주세요.`);
                } else {
                  enemy_hp = enemy_level * 10;
                  alert(`선택한 일반 던전의 레벨은 : ${enemy_level}`);
                  alert(`적의 체력은 : ${enemy_hp}`);
                  console.log(`선택한 일반 던전의 레벨은 : ${enemy_level}`);
                  console.log(`적의 체력은 : ${enemy_hp}`);
                  break;
                }
              } while (true);
              dongeon_choice = 1;
              //   일반 던전 선택시 끝
              break;
            case "보스 던전":
            case "2":
              // 보스전 시작
              do {
                boss_level = +prompt("보스의 레벨을 선택하세요. (1~100)");
                if (!(boss_level > 0 && boss_level < 101)) {
                  alert(`보스의 레벨 범위 1~100 사이에서 선택해주세요.`);
                } else {
                  boss_hp = boss_level ** 3 * 10;
                  alert(`선택한 일반 보스의 레벨은 : ${boss_level}`);
                  alert(`보스의 체력은 : ${boss_hp}`);
                  console.log(`선택한 일반 보스의 레벨은 : ${boss_level}`);
                  console.log(`보스의 체력은 : ${boss_hp}`);
                  break;
                }
              } while (true);
              // 보스전 끝
              dongeon_choice = 2;
              break;
            default:
              alert(`다시 선택하세요.`);
              dongeon_choice = 0;
          }
        } while (dongeon_choice == 0);
        // 던전 선택 끝

        //   던전에 따른 전투 방식 시작
        switch (dongeon_choice) {
          case 1: // 일반 던전 전투 시작
            switch (job) {
              case 1:
                do {
                  do {
                    act = 0;
                    damage = 0;
                    act = prompt(
                      `행동을 선택하세요.
                      1. 검 휘두르기
                      2. 2번 배기
                      3. 방패 들기
                      4. 도망가기`
                    );
                    switch (act) {
                      case "검 휘두르기":
                      case "1":
                        damage = parseInt(level * 2 * Math.random());
                        alert(
                          `검 휘두르기을 통하여 대미지를  ${damage}를 주었습니다.`
                        );
                        enemy_attak = parseInt(enemy_level * 4 * Math.random());
                        alert(`적에게 ${enemy_attak}만큼 대미지를 받았습니다.`);
                        my_hp -= enemy_attak;
                        enemy_hp -= damage;
                        if (enemy_hp <= 0) {
                          enemy_hp = 0;
                          alert(`
                          남은 적의 체력 : ${enemy_hp}
                          나의 체력 : ${my_hp}`);

                          console.log(`남은 적의 체력 : ${enemy_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${enemy_hp}
                        나의 체력 : ${my_hp}`);

                          console.log(`남은 적의 체력 : ${enemy_hp}`);
                        }
                        act = 1;
                        if (enemy_hp <= 0) break;
                        break;
                      case "2번 배기":
                      case "2":
                        damage = parseInt((level + 1) ** 2 * Math.random());
                        alert(
                          `2번 배기를 통하여 데미지를 ${damage}를 주었습니다.`
                        );
                        enemy_attak = parseInt(enemy_level * 4 * Math.random());
                        alert(`적에게 ${enemy_attak}만큼 대미지를 받았습니다.`);
                        my_hp -= enemy_attak;
                        enemy_hp -= damage;
                        if (enemy_hp <= 0) {
                          enemy_hp = 0;
                          alert(`
                          남은 적의 체력 : ${enemy_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${enemy_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 2;
                        break;
                      case "방패 들기":
                      case "3":
                        alert("적의 공격을 방패로 막았습니다.");
                        act = 3;
                        break;
                      case "도망가기":
                      case "4":
                        alert("적에게서 도망쳤습니다.");
                        act = 4;
                        break;
                      default:
                        alert("다시 선택해주세요.");
                        act = 5;
                    }
                  } while (act == 5);
                  if (act == 4) {
                    break;
                  }
                } while (enemy_hp > 0);
                break;
              case 2:
                do {
                  do {
                    act = 0;
                    damage = 0;
                    act = prompt(
                      `행동을 선택하세요. 
                      1. 화살 쏘기
                      2. 화살 2발
                      3. 피하기
                      4. 도망가기`
                    );
                    switch (act) {
                      case "화살 쏘기":
                      case "1":
                        damage = parseInt(level * 2 * Math.random());

                        alert(
                          `화살 쏘기를 통하여 대미지를  ${damage}를 주었습니다.`
                        );
                        enemy_attak = parseInt(enemy_level * 4 * Math.random());
                        alert(`적에게 ${enemy_attak}만큼 대미지를 받았습니다.`);
                        my_hp -= enemy_attak;
                        enemy_hp -= damage;
                        if (enemy_hp <= 0) {
                          enemy_hp = 0;
                          alert(`
                          남은 적의 체력 : ${enemy_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${enemy_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 1;
                        if (enemy_hp <= 0) break;
                        break;
                      case "헤드샷":
                      case "2":
                        damage = parseInt((level + 1) ** 2 * Math.random());
                        alert(
                          `헤드샷을 통하여 데미지를 ${damage}를 주었습니다.`
                        );
                        enemy_attak = parseInt(enemy_level * 4 * Math.random());
                        alert(`적에게 ${enemy_attak}만큼 대미지를 받았습니다.`);
                        my_hp -= enemy_attak;
                        enemy_hp -= damage;
                        if (enemy_hp <= 0) {
                          enemy_hp = 0;
                          alert(`
                          남은 적의 체력 : ${enemy_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${enemy_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 2;
                        break;
                      case "피하기":
                      case "3":
                        alert("적의 공격을 피했습니다.");
                        act = 3;
                        break;
                      case "도망가기":
                      case "4":
                        alert("적에게서 도망쳤습니다.");
                        act = 4;
                        break;
                      default:
                        alert("다시 선택해주세요.");
                        act = 5;
                    }
                  } while (act == 5);
                  if (act == 4) {
                    break;
                  }
                } while (enemy_hp > 0);
                break;
              case 3:
                do {
                  do {
                    act = 0;
                    damage = 0;
                    act = prompt(
                      `행동을 선택하세요.
                      1. 파이어 볼
                      2. 썬더 볼트
                      3. 텔레포트
                      4. 도망가기`
                    );
                    switch (act) {
                      case "파이어 볼":
                      case "1":
                        damage = parseInt(level * 2 * Math.random());

                        alert(
                          `파이어 볼을 통하여 대미지를  ${damage}를 주었습니다.`
                        );
                        enemy_attak = parseInt(enemy_level * 4 * Math.random());
                        alert(`적에게 ${enemy_attak}만큼 대미지를 받았습니다.`);
                        my_hp -= enemy_attak;
                        enemy_hp -= damage;
                        if (enemy_hp <= 0) {
                          enemy_hp = 0;
                          alert(`
                          남은 적의 체력 : ${enemy_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${enemy_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 1;
                        if (enemy_hp <= 0) break;
                        break;
                      case "썬더 볼트":
                      case "2":
                        damage = parseInt((level + 1) ** 2 * Math.random());
                        alert(
                          `썬더 볼트를 통하여 데미지를 ${damage}를 주었습니다.`
                        );
                        enemy_attak = parseInt(enemy_level * 4 * Math.random());
                        alert(`적에게 ${enemy_attak}만큼 대미지를 받았습니다.`);
                        my_hp -= enemy_attak;
                        enemy_hp -= damage;
                        if (enemy_hp <= 0) {
                          enemy_hp = 0;
                          alert(`
                          남은 적의 체력 : ${enemy_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${enemy_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 2;
                        break;
                      case "텔레포트":
                      case "3":
                        alert("텔레포트로 적의 공격을 피했습니다.");
                        act = 3;
                        break;
                      case "도망가기":
                      case "4":
                        alert("적에게서 도망쳤습니다.");
                        act = 4;
                        break;
                      default:
                        alert("다시 선택해주세요.");
                        act = 5;
                    }
                  } while (act == 5);
                  if (act == 4) {
                    break;
                  }
                } while (enemy_hp > 0);
                break;
              case 4:
                do {
                  do {
                    act = 0;
                    damage = 0;
                    act = prompt(
                      `행동을 선택하세요.
                      1. 표창 던지기
                      2. 함정 설치
                      3. 은신
                      4. 도망가기`
                    );
                    switch (act) {
                      case "표창 던지기":
                      case "1":
                        damage = parseInt(level * 2 * Math.random());

                        alert(
                          `표창 던지기 통하여 대미지를  ${damage}를 주었습니다.`
                        );
                        enemy_attak = parseInt(enemy_level * 4 * Math.random());
                        alert(`적에게 ${enemy_attak}만큼 대미지를 받았습니다.`);
                        my_hp -= enemy_attak;
                        enemy_hp -= damage;
                        if (enemy_hp <= 0) {
                          enemy_hp = 0;
                          alert(`
                          남은 적의 체력 : ${enemy_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${enemy_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 1;
                        if (enemy_hp <= 0) break;
                        break;
                      case "함정 설치":
                      case "2":
                        damage = parseInt((level + 1) ** 2 * Math.random());
                        alert(
                          `적이 함정에 빠져 ${damage} 데미지를 입었습니다.`
                        );
                        enemy_attak = parseInt(enemy_level * 4 * Math.random());
                        alert(`적에게 ${enemy_attak}만큼 대미지를 받았습니다.`);
                        my_hp -= enemy_attak;
                        enemy_hp -= damage;
                        if (enemy_hp <= 0) {
                          enemy_hp = 0;
                          alert(`
                          남은 적의 체력 : ${enemy_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${enemy_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 2;
                        break;
                      case "은신":
                      case "3":
                        alert("은신을 하여 적의 공격을 피했습니다.");
                        act = 3;
                        break;
                      case "도망가기":
                      case "4":
                        alert("적에게서 도망쳤습니다.");
                        act = 4;
                        break;
                      default:
                        alert("다시 선택해주세요.");
                        act = 5;
                    }
                  } while (act == 5);
                  if (act == 4) {
                    break;
                  }
                } while (enemy_hp > 0);
                break;
            }
            // 일반 던전 전투 끝

            //   일반 던전 보상 시작
            if (act != 4 || enemy_hp <= 0) {
              get_exp = enemy_level ** 2;
              get_money = parseInt(enemy_level * 10 * Math.random());
              console.log(`획득 경험치 : ${get_exp}`);
              alert(`획득 경험치 : ${get_exp}
              획득 한 돈 : ${get_money}`);
              money += get_money;
              exp += get_exp;
              if (exp >= 100) {
                exp -= 100;
                level++;
                console.log(`${level}LEVEL이 되었습니다.`);
              }
            }
            // 일반 던전 보상 끝
            break;
          case 2: // 보스 전투 시작
            switch (job) {
              case 1:
                do {
                  do {
                    act = 0;
                    damage = 0;
                    act = prompt(
                      `행동을 선택하세요.
                      1. 검 휘두르기
                      2. 2번 배기
                      3. 방패 들기
                      4. 도망가기`
                    );
                    switch (act) {
                      case "검 휘두르기":
                      case "1":
                        damage = parseInt(level * 2 * Math.random() * 0.7);
                        alert(
                          `검 휘두르기을 통하여 대미지를  ${damage}를 주었습니다.`
                        );
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        boss_hp -= damage;
                        if (boss_hp <= 0) {
                          boss_hp = 0;
                          alert(`
                          남은 적의 체력 : ${boss_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${boss_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 1;
                        if (boss_hp <= 0) break;
                        break;
                      case "2번 배기":
                      case "2":
                        damage = parseInt(
                          (level + 1) ** 2 * Math.random() * 0.7
                        );
                        alert(
                          `2번 배기를 통하여 데미지를 ${damage}를 주었습니다.`
                        );
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        boss_hp -= damage;
                        if (boss_hp <= 0) {
                          boss_hp = 0;
                          alert(`
                          남은 적의 체력 : ${boss_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${boss_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 2;
                        break;
                      case "방패 들기":
                      case "3":
                        alert("적의 공격을 방패로 약간 막았습니다.");
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        alert(`
                          나의 체력 : ${my_hp}`);
                        act = 3;
                        break;
                      case "도망가기":
                      case "4":
                        alert("적에게서 도망쳤습니다.");
                        act = 4;
                        break;
                      default:
                        alert("다시 선택해주세요.");
                        act = 5;
                    }
                  } while (act == 5);
                  if (act == 4) {
                    break;
                  }
                } while (boss_hp > 0);
                break;
              case 2:
                do {
                  do {
                    act = 0;
                    damage = 0;
                    act = prompt(
                      `행동을 선택하세요.
                      1. 화살 쏘기
                      2. 화살 2발
                      3. 피하기
                      4. 도망가기`
                    );
                    switch (act) {
                      case "화살 쏘기":
                      case "1":
                        damage = parseInt(level * 2 * Math.random() * 0.7);

                        alert(
                          `화살 쏘기를 통하여 대미지를  ${damage}를 주었습니다.`
                        );
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        boss_hp -= damage;
                        if (boss_hp <= 0) {
                          boss_hp = 0;
                          alert(`
                          남은 적의 체력 : ${boss_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${boss_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 1;
                        if (boss_hp <= 0) break;
                        break;
                      case "헤드샷":
                      case "2":
                        damage = parseInt(
                          (level + 1) ** 2 * Math.random() * 0.7
                        );
                        alert(
                          `헤드샷을 통하여 데미지를 ${damage}를 주었습니다.`
                        );
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        boss_hp -= damage;
                        if (boss_hp <= 0) {
                          boss_hp = 0;
                          alert(`
                          남은 적의 체력 : ${boss_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${boss_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 2;
                        break;
                      case "피하기":
                      case "3":
                        alert("적의 공격을 약간 피했습니다.");
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        alert(`
                          나의 체력 : ${my_hp}`);
                        act = 3;
                        break;
                      case "도망가기":
                      case "4":
                        alert("적에게서 도망쳤습니다.");
                        act = 4;
                        break;
                      default:
                        alert("다시 선택해주세요.");
                        act = 5;
                    }
                  } while (act == 5);
                  if (act == 4) {
                    break;
                  }
                } while (boss_hp > 0);
                break;
              case 3:
                do {
                  do {
                    act = 0;
                    damage = 0;
                    act = prompt(
                      `행동을 선택하세요.
                      1. 파이어 볼
                      2. 썬더 볼트
                      3. 텔레포트
                      4. 도망가기`
                    );
                    switch (act) {
                      case "파이어 볼":
                      case "1":
                        damage = parseInt(level * 2 * Math.random() * 0.7);

                        alert(
                          `파이어 볼을 통하여 대미지를  ${damage}를 주었습니다.`
                        );
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        enemy_hp -= damage;
                        if (enemy_hp <= 0) {
                          enemy_hp = 0;
                          alert(`
                          남은 적의 체력 : ${boss_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${boss_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 1;
                        if (enemy_hp <= 0) break;
                        break;
                      case "썬더 볼트":
                      case "2":
                        damage = parseInt(
                          (level + 1) ** 2 * Math.random() * 0.7
                        );
                        alert(
                          `썬더 볼트를 통하여 데미지를 ${damage}를 주었습니다.`
                        );
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        enemy_hp -= damage;
                        if (enemy_hp <= 0) {
                          enemy_hp = 0;
                          alert(`
                          남은 적의 체력 : ${boss_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${boss_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 2;
                        break;
                      case "텔레포트":
                      case "3":
                        alert("텔레포트로 적의 공격을 약간 피했습니다.");
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        alert(`
                          나의 체력 : ${my_hp}`);
                        act = 3;
                        break;
                      case "도망가기":
                      case "4":
                        alert("적에게서 도망쳤습니다.");
                        act = 4;
                        break;
                      default:
                        alert("다시 선택해주세요.");
                        act = 5;
                    }
                  } while (act == 5);
                  if (act == 4) {
                    break;
                  }
                } while (boss_hp > 0);
                break;
              case 4:
                do {
                  do {
                    act = 0;
                    damage = 0;
                    act = prompt(
                      `행동을 선택하세요.
                      1. 표창 던지기
                      2. 함정 설치
                      3. 은신
                      4. 도망가기`
                    );
                    switch (act) {
                      case "표창 던지기":
                      case "1":
                        damage = parseInt(level * 2 * Math.random() * 0.7);

                        alert(
                          `표창 던지기 통하여 대미지를  ${damage}를 주었습니다.`
                        );
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        boss_hp -= damage;
                        if (boss_hp <= 0) {
                          boss_hp = 0;
                          alert(`
                          남은 적의 체력 : ${boss_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${boss_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 1;
                        if (boss_hp <= 0) break;
                        break;
                      case "함정 설치":
                      case "2":
                        damage = parseInt(
                          (level + 1) ** 2 * Math.random() * 0.7
                        );
                        alert(
                          `적이 함정에 빠져 ${damage} 데미지를 입었습니다.`
                        );
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        boss_hp -= damage;
                        if (boss_hp <= 0) {
                          boss_hp = 0;
                          alert(`
                          남은 적의 체력 : ${boss_hp}
                          나의 체력 : ${my_hp}`);
                        } else {
                          alert(`
                        남은 적의 체력 : ${boss_hp}
                        나의 체력 : ${my_hp}`);
                        }
                        act = 2;
                        break;
                      case "은신":
                      case "3":
                        alert("은신을 하여 적의 공격을 약간 피했습니다.");
                        boss_attak = parseInt(
                          enemy_level * 4 * Math.random() * 1.2
                        );
                        alert(
                          `보스에게 ${boss_attak}만큼 대미지를 받았습니다.`
                        );
                        my_hp -= boss_attak;
                        alert(`
                          나의 체력 : ${my_hp}`);
                        act = 3;
                        break;
                      case "도망가기":
                      case "4":
                        alert("적에게서 도망쳤습니다.");
                        act = 4;
                        break;
                      default:
                        alert("다시 선택해주세요.");
                        act = 5;
                    }
                  } while (act == 5);
                  if (act == 4) {
                    break;
                  }
                } while (boss_hp > 0);
                break;
            }
            // 보스 전투 끝

            //   보스 던전 보상 시작
            if (act != 4 || boss_hp <= 0) {
              get_exp = boss_level ** 2 * 5;
              get_money = parseInt(boss_level * 20 * Math.random());
              console.log(`획득 경험치 : ${get_exp}`);
              alert(`획득 경험치 : ${get_exp}
              획득한 돈 : ${get_money}`);
              money += get_money;
              exp += get_exp;
              if (exp >= 100) {
                exp -= 100;
                level++;
                console.log(`${level}LEVEL이 되었습니다.`);
              }
            }
            // 보스  던전 보상 끝
            break;
        }
        //   던전에 따른 전투 방식 끝

        console.log(`현재 경험치 : ${exp}`);
        // 전투 끝
        choice_act = 1;
        break;
      case "상태보기":
      case "2":
        // 상태창 보기 시작
        alert(`
  나의 레벨 : ${level}
  현재 체력 : ${my_hp}
  현재 경험치 : ${exp}
  현재 돈 : ${money}
  `);
        // 상태창 보기 끝
        choice_act = 2;
        break;
      case "체력 회복하기":
      case "3":
        // 체력 회복하기 시작
        do {
          choice_potion = prompt(`
회복 물약을 선택하세요.

1. 빨간 물약 : HP 10 회복 (5원)
2. 주황 물약 : HP 20 회복 (9원)
3. 노랑 물약 : HP 30 회복 (13원)
4. 초록 물약 : HP 40 회복 (17원)
5. 나가기
`);
          switch (choice_potion) {
            case "빨간 물약":
            case "1":
              if (money >= 5) {
                my_hp += 10;
                if (my_hp >= max_hp) {
                  my_hp = max_hp;
                }
                alert(`물약으로 체력 10 회복`);
                alert(`현재 체력 : ${my_hp}`);
                console.log(`물약으로 체력 10 회복`);
                console.log(`현재 체력 : ${my_hp}`);
                choice_potion = 1;
              } else {
                alert(`돈이 부족합니다.`);
              }
              break;
            case "주황 물약":
            case "2":
              if (money >= 9) {
                my_hp += 20;
                if (my_hp >= max_hp) {
                  my_hp = max_hp;
                }
                alert(`물약으로 체력 20 회복`);
                alert(`현재 체력 : ${my_hp}`);
                console.log(`물약으로 체력 20 회복`);
                console.log(`현재 체력 : ${my_hp}`);
                choice_potion = 2;
              } else {
                alert(`돈이 부족합니다.`);
              }
              break;
            case "노랑 물약":
            case "3":
              if (money >= 13) {
                my_hp += 20;
                if (my_hp >= max_hp) {
                  my_hp = max_hp;
                }
                alert(`물약으로 체력 30 회복`);
                alert(`현재 체력 : ${my_hp}`);
                console.log(`물약으로 체력 30 회복`);
                console.log(`현재 체력 : ${my_hp}`);
                choice_potion = 3;
              } else {
                alert(`돈이 부족합니다.`);
              }
              break;
            case "초록 물약":
            case "4":
              if (money >= 17) {
                my_hp += 20;
                if (my_hp >= max_hp) {
                  my_hp = max_hp;
                }
                alert(`물약으로 체력 40 회복`);
                alert(`현재 체력 : ${my_hp}`);
                console.log(`물약으로 체력 40 회복`);
                console.log(`현재 체력 : ${my_hp}`);
                choice_potion = 4;
              } else {
                alert(`돈이 부족합니다.`);
              }
              break;
            case "나가기":
            case "5":
              choice_potion = 5;
              break;
            default:
              choice_potion = 0;
              alert(`잘못 입력하셨습니다.`);
              console.log(`잘못 입력하셨습니다.`);
          }
          if (choice_potion == 5) {
            break;
          }
        } while (choice_potion == 0);
        // 체력 회복하기 끝
        choice_act = 3;
        break;
      case "게임 끝내기":
      case "4":
        choice_act = 4;
        break;
      default:
        alert(`잘못 입력하셨습니다. 다시 입력해주세요.`);
        choice_act = 0;
    }
  } while (choice_act == 0);
  // 전투하러 가기? 상태창 보기? 체력 회복하기? 끝
  if (choice_act == 4) {
    play = 0;
  }
}
