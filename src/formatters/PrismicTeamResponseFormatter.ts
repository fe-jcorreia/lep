interface PrismicData {
  presidencia: PrismicMember[];
  diretoria: PrismicMember[];
  aceleracao: PrismicMember[];
  genteegestao: PrismicMember[];
  comunicacao: PrismicMember[];
  eventos: PrismicMember[];
}

interface PrismicMember {
  memberphoto: { url: string };
  membername: { text: string }[];
  memberdescription: { text: string }[];
  linkedin: { url: string };
}

interface Member {
  photo: string;
  name: string;
  description: string;
  linkedin: string;
}

export function PrismicTeamResponseFormatter(data: PrismicData) {
  const presidency = data.presidencia.map((president: PrismicMember) => {
    return {
      photo: president.memberphoto.url,
      name: president.membername[0].text,
      description: president.memberdescription[0].text,
      linkedin: president.linkedin.url,
    };
  });

  const direction = data.diretoria.map((director: PrismicMember) => {
    return {
      photo: director.memberphoto.url,
      name: director.membername[0].text,
      description: director.memberdescription[0].text,
      linkedin: director.linkedin.url,
    };
  });

  const acceleration = data.aceleracao.map(
    (accelerationMember: PrismicMember) => {
      return {
        photo: accelerationMember.memberphoto.url,
        name: accelerationMember.membername[0].text,
        description: accelerationMember.memberdescription[0].text,
        linkedin: accelerationMember.linkedin.url,
      };
    }
  );

  const humamResources = data.genteegestao.map(
    (humamResourcesMember: PrismicMember) => {
      return {
        photo: humamResourcesMember.memberphoto.url,
        name: humamResourcesMember.membername[0].text,
        description: humamResourcesMember.memberdescription[0].text,
        linkedin: humamResourcesMember.linkedin.url,
      };
    }
  );

  const comunication = data.comunicacao.map(
    (comunicationMember: PrismicMember) => {
      return {
        photo: comunicationMember.memberphoto.url,
        name: comunicationMember.membername[0].text,
        description: comunicationMember.memberdescription[0].text,
        linkedin: comunicationMember.linkedin.url,
      };
    }
  );

  const events = data.eventos.map((eventsMember: PrismicMember) => {
    return {
      photo: eventsMember.memberphoto.url,
      name: eventsMember.membername[0].text,
      description: eventsMember.memberdescription[0].text,
      linkedin: eventsMember.linkedin.url,
    };
  });

  const dataFormatted = {
    presidency,
    direction,
    acceleration,
    humamResources,
    comunication,
    events,
  };

  return dataFormatted;
}
