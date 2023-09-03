import Season from "../entities/Season";

interface SeasonRepositoryInterface {

    hasSeasonById(id: string): Promise<boolean>;
    create(serieId: string, newSeason: Season): Promise<void>;
    update(serieId: string, id: string, seasonModified: Season): Promise<void>
}

export default SeasonRepositoryInterface;