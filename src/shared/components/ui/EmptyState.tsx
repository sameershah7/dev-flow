import React from 'react';

type EmptyStateProps = {
    message?: string;
    description?: string;
    icon?: React.ReactNode;
};

export function EmptyState({
    message = "No data found",
    description,
    icon
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center p-10 text-center animate-in fade-in duration-500">
            {icon && <div className="mb-4 text-text-muted">{icon}</div>}

            <p className="text-lg font-medium text-text-main">
                {message}
            </p>

            {description && (
                <p className="text-sm text-text-muted mt-1">
                    {description}
                </p>
            )}
        </div>
    );
}
