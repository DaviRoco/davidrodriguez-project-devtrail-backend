import { NextResponse } from 'next/server';
import ProjectsController from '../../lib/controllers/ProjectsController';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const validParams = ['name', 'id'];
  const invalidParams: string[] = [];

  searchParams.forEach((_, key) => {
    if (!validParams.includes(key)) {
      invalidParams.push(key);
    }
  });

  if (invalidParams.length > 0) {
    return NextResponse.json(
      {
        message: `Invalid query parameters: ${invalidParams.join(', ')}`,
      },
      { status: 400 },
    );
  }

  const name = searchParams.get('name');
  if (name) {
    const response = await ProjectsController.getProjectByName(name);
    return NextResponse.json(response.body, { status: response.status });
  }

  const id = searchParams.get('id');
  if (id) {
    const response = await ProjectsController.getProjectByID(id);
    return NextResponse.json(response.body, { status: response.status });
  }

  const response = await ProjectsController.getAllProjects();
  return NextResponse.json(response.body, { status: response.status });
}
