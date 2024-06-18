export interface PageTitleProps {
    title: string
    subtitle?: string
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default PageTitle
