import Crew from "../src/model/Crew";
import Crewman from "../src/model/Crewman";
import Launch from "../src/model/Launch";
import Rocket from "../src/model/Rocket";
import { CrewRepository } from "../src/repository/CrewRepository";
import { CrewmanRepository } from "../src/repository/CrewmanRepository";
import { LaunchRepository } from "../src/repository/LaunchRepository";
import { RocketRepository } from "../src/repository/RocketRepository";
import { CrewService } from "../src/service/CrewService";
import { CrewmanService } from "../src/service/CrewmanService";
import { LaunchService } from "../src/service/LaunchService";
import { RocketService } from "../src/service/RocketService";
import { crew, crewman, launch, rocket } from "./mockEntities";

it("should getById a new rocket", async () => {
    //getByIds a fake repository
    const rocketRepositoryMock = new RocketRepository(Rocket);
    rocketRepositoryMock.getById = jest.fn().mockResolvedValue(rocket);

    //getByIds a real service based on the fake repository
    const rocketServiceMock = new RocketService(rocketRepositoryMock);

    const result = await rocketServiceMock.getById(rocket.id);
    return expect(result).toEqual(rocket);
});

it("should getById a new launch", async () => {
    //getByIds a fake repository
    const launchRepositoryMock = new LaunchRepository(Launch);
    launchRepositoryMock.getById = jest.fn().mockResolvedValue(launch);

    //getByIds a real service based on the fake repository
    const launchServiceMock = new LaunchService(launchRepositoryMock);

    const result = await launchServiceMock.getById(launch.id);
    return expect(result).toEqual(launch);
});

it("should getById a new crew", async () => {
    //getByIds a fake repository
    const crewRepositoryMock = new CrewRepository(Crew);
    crewRepositoryMock.getById = jest.fn().mockResolvedValue(crew);

    //getByIds a real service based on the fake repository
    const crewServiceMock = new CrewService(crewRepositoryMock);

    const result = await crewServiceMock.getById(crew.id);
    return expect(result).toEqual(crew);
});

it("should getById a new crewman", async () => {
    //getByIds a fake repository
    const crewmanRepositoryMock = new CrewmanRepository(Crewman);
    crewmanRepositoryMock.getById = jest.fn().mockResolvedValue(crewman);

    //getByIds a real service based on the fake repository
    const crewmanServiceMock = new CrewmanService(crewmanRepositoryMock);

    const result = await crewmanServiceMock.getById(crewman.id);
    return expect(result).toEqual(crewman);
});