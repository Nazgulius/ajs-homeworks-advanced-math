export default class AttackModification {
    static modAttackDistance(attack, distance, stoned) {
        const basicAttack = attack - ((distance - 1) * (10 * (attack / 100)));
        
        if (!stoned) {
            return basicAttack;
        }
        
        return basicAttack - Math.log2(distance) * 5; 
    }   
}